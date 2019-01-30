import React from 'react';
import './Timer.css';
import moment from 'moment';
import 'moment/locale/ko';

class Timer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mtNow: moment(),
    }
  }

  componentDidMount() {
    setInterval(()=>{
      this.setState({
        mtNow: moment(),
      })
    }, 1000);
  }

  render() {
    const {expireDate} = this.props;
    const {mtNow}=this.state;
    const mtExpire=moment(expireDate);

    const isExpire = mtExpire > mtNow;

    return (
      <div className="Timer">
        <div>{`현재시간은 ${mtNow.format('a hh:mm')}, ${mtExpire.format('a hh:mm')}`}</div>
        {isExpire ? (
        <div>{`${mtExpire.fromNow()}에 강의 종료 합니다`}</div>
          ) : (
        <div>{`강의가 종료 되었습니다.`}</div>
        )
        }
      </div>
    )
  }
}

export default Timer;
