import React from "react";

class PaypalButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEnabled: false,
    };
  }

  componentDidMount() {
    this.setState({ isEnabled: true });
    paypal.Button.render(
      {
        env: "sandbox",
        client: {
          sandbox:
            "AcuKT0Vux-tYeqVZ_iW1W2hx7hBcPlN-30kGXjAZJavAHpAByRGUdLrLm556pI_Z0za5SHdLGcmR5IsQ",
          production:
            "AT-znpkyOTEJkac9PPygohTAIGFwRtsl6Cupf1Y-2ROLwzumGzdCLGtmKZMJVw3BA5sn7TuDKqS1VzKC",
        },

        payment: function (data, actions) {
          return actions.payment.create({
            transactions: [
              {
                amount: {
                  total: "1.00",
                  currency: "USD",
                },
              },
            ],
          });
        },
        commit: true,

        onAuthorize: function (data, actions) {
          return actions.payment.execute().then(function (response) {
            console.log("The payment was completed!");
          });
        },

        onCancel: function (data) {
          console.log("The payment was cancelled!");
        },
      },
      "#paypal-express-btn"
    );
  }

  render() {
    return (
      <div>
        {this.state.isEnabled ? <div id="paypal-express-btn" /> : "Loading..."}
      </div>
    );
  }
}

export default PaypalButton;
