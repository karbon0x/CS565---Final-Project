import React, { PureComponent } from 'react';
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import moment from 'moment';
import Dates from './Dates';
import type Moment from 'moment';
import Icon from 'react-native-vector-icons/Ionicons';
import ActionButton from 'react-native-action-button';

import PopupDialog, {
    DialogTitle,
    DialogButton,
    SlideAnimation,
    ScaleAnimation,
    FadeAnimation,
  } from 'react-native-popup-dialog';



type Props = {
  currentDate?: string | Moment,
  onSelectDate: (date: Moment) => any,
  showDaysAfterCurrent?: number,
  showDaysBeforeCurrent?: number,
};

type State = {
  allDatesHaveRendered: boolean,
  currentDateIndex: ?number,
  visibleMonths: ?Array<string>,
  visibleYears: ?Array<string>,
  dates: Array<Moment>,
  dayWidths: ?{| [index: number]: number |},
  scrollPositionX: number,
};

const { width: screenWidth } = Dimensions.get('window');
const formatMonth = (date: Moment): string => date.format('MMMM');
const formatYear = (date: Moment): string => date.format('YYYY');


export default class Calendar extends PureComponent {

  props: Props;

  state: State;

  static defaultProps = {

    showDaysBeforeCurrent: 5,  // Show 5 days before the current day

    showDaysAfterCurrent: 5,     // And after
  };

  _scrollView;

  constructor(props: Props) {
    super(props);
    this.state = {
      allDatesHaveRendered: false,
      currentDateIndex: props.showDaysBeforeCurrent,
      dates: this.getDates(),
      dayWidths: undefined,
      scrollPositionX: 0,
      visibleMonths: undefined,
      visibleYears: undefined,
    };
  }

  getDates = (): Array<Moment> => {
    const {
      currentDate,
      showDaysBeforeCurrent,
      showDaysAfterCurrent,
    } = this.props;

    const startDay = moment(currentDate || undefined)
      .subtract(showDaysBeforeCurrent + 1, 'days');

    const totalDaysCount = showDaysBeforeCurrent + showDaysAfterCurrent + 1;

    return [...Array(totalDaysCount)]
      .map(_ => startDay.add(1, 'day').clone());
  };

  getVisibleDates = (): ?Array<Moment> => {

    const {
      dates,
      dayWidths,
      scrollPositionX,
    } = this.state;

    if (!dayWidths) {
      return;
    }

    let datePositionX = 0;
    let firstVisibleDateIndex = undefined;
    let lastVisibleDateIndex = undefined;

    Object.values(dayWidths).some((width: number, index: number) => {

      if (firstVisibleDateIndex === undefined       // not set yet
        && datePositionX >= scrollPositionX  // first date visible
      ) {
        firstVisibleDateIndex = index > 0 ? index - 1 : index;
      }

      if (lastVisibleDateIndex === undefined                      // not set yet
        && datePositionX >= scrollPositionX + screenWidth  // first date not visible behind the right edge
      ) {
        lastVisibleDateIndex = index;
      }

      datePositionX += width;
      return !!(firstVisibleDateIndex && lastVisibleDateIndex);
    });
    return dates.slice(firstVisibleDateIndex, lastVisibleDateIndex);
  };

  // Format as a string the month(s) and the year(s) of the dates currently visible
  getVisibleMonthAndYear = (): ?string => {
    const {
      dates,
      visibleMonths,
      visibleYears,
    } = this.state;

    if (!visibleMonths || !visibleYears) {
      if (dates) {
        const firstDate = dates[0];
        return `${formatMonth(firstDate)}, ${formatYear(firstDate)}`;
      }
      return undefined;
    }

    if (visibleYears.length === 1) {
      return `${visibleMonths.join(' – ')},  ${visibleYears[0]}`;
    }

    return visibleMonths
      .map((month, index) => `${month}, ${visibleYears[index]}`)
      .join(' – ');
  };

  updateVisibleMonthAndYear = () => {

    const { allDatesHaveRendered } = this.state;

    if (!allDatesHaveRendered) {
      return;
    }

    const visibleDates = this.getVisibleDates();

    if (!visibleDates) {
      return;
    }

    let visibleMonths = [];
    let visibleYears = [];

    visibleDates.forEach((date: Moment) => {
      const month = formatMonth(date);
      const year = formatYear(date);
      if (!visibleMonths.includes(month)) {
        visibleMonths.push(month);
      }
      if (!visibleYears.includes(year)) {
        visibleYears.push(year);
      }
    });

    this.setState({
      visibleMonths,
      visibleYears,
    });
  };

  scrollToCurrentDay = () => {
    const {
      allDatesHaveRendered,
      currentDateIndex,
      dayWidths,
    } = this.state;

    if (!allDatesHaveRendered || currentDateIndex === undefined || currentDateIndex === null) {
      return;
    }

    // Put all day width values into a simple array $FlowFixMe
    const dayWidthsArray: Array<number> = Object.values(dayWidths);
    const allDaysWidth = dayWidthsArray.reduce((total, width) => width + total, 0);
    const currentDayWidth = dayWidthsArray[currentDateIndex];
    const minX = 0;
    const maxX = allDaysWidth > screenWidth
      ? allDaysWidth - screenWidth
      : 0;

    let scrollToX;

    scrollToX = dayWidthsArray
      // get all days before the target one
      .slice(0, currentDateIndex + 1)
      // and calculate the total width
      .reduce((total, width) => width + total, 0)
      // Subtract half of the screen width so the target day is centered
      - screenWidth / 2 - currentDayWidth / 2;

    if (scrollToX < minX) {
      scrollToX = 0;
    }
    else if (scrollToX > maxX) {
      scrollToX = maxX;
    }

    this._scrollView.scrollTo({ x: scrollToX });
  };

  onSelectDay = (index: number) => {
    const { dates } = this.state;
    const { onSelectDate } = this.props;
    this.setState({ currentDateIndex: index }, this.scrollToCurrentDay);
    onSelectDate(dates[index]);
  };

  onRenderDay = (index: number, width: number) => {
    const { dayWidths } = this.state;
    const {
      showDaysBeforeCurrent,
      showDaysAfterCurrent,
    } = this.props;

    const allDatesHaveRendered = dayWidths
      && Object.keys(dayWidths).length >= showDaysBeforeCurrent + showDaysAfterCurrent;

    this.setState(prevState => ({
      allDatesHaveRendered,
      dayWidths: {
        // keep all existing widths added previously
        ...prevState.dayWidths,
        [index]: width,
      },
    }), () => {
      if (allDatesHaveRendered) {
        this.scrollToCurrentDay();
        this.updateVisibleMonthAndYear();
      }
    });
  };

  onScroll = (event: { nativeEvent: { contentOffset: { x: number, y: number } } }) => {
    const { nativeEvent: { contentOffset: { x } } } = event;
    this.setState({ scrollPositionX: x }, this.updateVisibleMonthAndYear);
  };

  render() {
    const {
      dates,
      currentDateIndex,
    } = this.state;
    const visibleMonthAndYear = this.getVisibleMonthAndYear();

    return (
      <View>
        <Text style={styles.visibleMonthAndYear}>
          {visibleMonthAndYear}
        </Text>
        <ScrollView
          ref={scrollView => { this._scrollView = scrollView; }}
          horizontal={true}                         // Enable horizontal scrolling
          showsHorizontalScrollIndicator={false}    // Hide horizontal scroll indicators
          automaticallyAdjustContentInsets={false}  // Do not adjust content automatically
          scrollEventThrottle={100}
          onScroll={this.onScroll}
        >
          <Dates
            dates={dates}
            currentDateIndex={currentDateIndex}
            onSelectDay={this.onSelectDay}
            onRenderDay={this.onRenderDay}
          />
        </ScrollView>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  visibleMonthAndYear: {
    color: 'rgba(255, 255, 255, 0.5)',
    paddingHorizontal: 15,
    textAlign: 'left',
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
});
