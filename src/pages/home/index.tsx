import React, { Component } from 'react'
import styles from './style.module.scss'
import { Button, message, DatePicker } from 'antd'
export default class Index extends Component {
  render() {
    return (
      <div className={styles.test}>
        Home <br />
        <DatePicker /> <br />
        <Button
          size="large"
          onClick={() => {
            message.success('点击成功')
          }}
        >
          antd按钮
        </Button>
      </div>
    )
  }
}
