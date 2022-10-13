import './index.css'
import {Component} from 'react'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {amount: 2000}

  deleteAmount = value => {
    const {amount} = this.state
    if (amount >= 50 && amount < 100) {
      if (value === 50) {
        this.setState(prevState => ({amount:prevState.amount-value}))
      }
    } else if (amount >= 100 && amount < 200) {
      if(value === 100 || value === 50) {
        this.setState(prevState => ({amount:prevState.amount-value}))
      }
    } else if (amount >= 200 && amount < 500) {
      if(value !== 100) {
        this.setState(prevState => ({amount:prevState.amount-value}))
      }
    } else if(amount >= 500) {
      this.setState(prevState => ({amount:prevState.amount - value}))
    }
  }

  render() {
    const {denominationsList} = this.props
    const {amount} = this.state
    return (
      <div className="bg-container">
        <div className="card-1">
          <div className="profile-container">
            <div className="card-profile">
              <p className="heading-s">S</p>
              <h1 className="name">Sarah Williams</h1>
            </div>
            <div className="balance-container">
              <p className="your-balance">Your Balance</p>
              <p className="balance-count">{amount}</p>
            </div>
            <p className="rupees">In Rupees</p>
            <h1 className="with-draw">Withdraw</h1>
            <p className="sum-in-rupees">CHOOSE SUM (IN RUPEES)</p>
            <ul className="items-container">
              {denominationsList.map(eachDenomination => (
                <DenominationItem
                  key={eachDenomination.id}
                  denomination={eachDenomination}
                  deleteAmount={this.deleteAmount}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal