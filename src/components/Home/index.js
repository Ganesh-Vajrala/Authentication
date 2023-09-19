import {Component} from 'react'
import './index.css'
import Header from '../Header'

export default class Home extends Component {
  render() {
    return (
      <div className="home-main-container">
        <Header />
        <div className="home-container">
          <h1>hi</h1>
        </div>
      </div>
    )
  }
}
