//Greeter,js
import React, {Component} from 'react'
import config from './config.json';
import styles from './greeter.css';

class Greeter extends Component{
  render() {
    return (
      <div className={styles.root}>
        O(∩_∩)O哈哈~aaaaa
        <br />
        <div>我是谁是1</div>
        {config.text}
      </div>
    );
  }
}

export default Greeter;
