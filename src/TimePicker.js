import cx from 'classnames';
import moment from 'moment';
import React from 'react';
import InputSlider from 'react-input-slider';

export default class extends React.Component {
  constructor(props) {
    super(props);
  }

  getMoment() {
    return this.props.moment || moment();
  }

  render() {
    let m = this.getMoment().clone();

    return (
      <div className={cx('im-time-picker', this.props.className)}>
        <div className="showtime">
          <span className="time">{m.format('HH')}</span>
          <span className="separator">:</span>
          <span className="time">{m.format('mm')}</span>
          {this.props.showSeconds &&
            <span>
              <span className="separator">:</span>
              <span className="time">{m.format('ss')}</span>
            </span>
          }
        </div>

        <div className="sliders">
          <div className="time-text">Hours:</div>
          <InputSlider
            className="im-time-slider"
            xmin={0}
            xmax={23}
            x={m.hour()}
            onChange={this.changeHours.bind(this)}
          />
          <div className="time-text">Minutes:</div>
          <InputSlider
            className="im-time-slider"
            xmin={0}
            xmax={59}
            x={m.minute()}
            onChange={this.changeMinutes.bind(this)}
          />
          {this.props.showSeconds &&
            <div className="time-text">Seconds:</div>
          }
          {this.props.showSeconds &&
            <InputSlider
              className="im-time-slider"
              xmin={0}
              xmax={59}
              x={m.second()}
              onChange={this.changeSeconds.bind(this)}
            />
          }
        </div>
      </div>
    );
  }

  changeHours(pos) {
    let m = this.getMoment().clone();
    m.hours(parseInt(pos.x, 10));
    this.props.onChange(m);
  }

  changeMinutes(pos) {
    let m = this.getMoment().clone();
    m.minutes(parseInt(pos.x, 10));
    this.props.onChange(m);
  }

  changeSeconds(pos) {
    let m = this.getMoment().clone();
    m.seconds(parseInt(pos.x, 10));
    this.props.onChange(m);
  }
}
