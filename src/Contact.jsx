import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ContactIcon from './svg/contact.svg';
import 'animate.css';

class Modal extends Component {
    constructor(props) {
        super(props)
        this.emailAddr = '#'
        console.log(props)
        this.initialState = true
    }
    componentDidMount() {
        this.emailAddr = atob('bWFpbHRvOldpbmNlckNoYW5AZ21haWwuY29t');
    }
    render() {
        if (!this.props.modalState && this.initialState) {
            this.initialState = false
            return null
        }
        return (
            <div className={"modal is-active animated " + (this.props.modalState ? "slideInDown" : "slideOutUp")} >
                <div className="modal-background" onClick={this.props.closeModal} />
                <div className="container contact">
                    <h6 className="subtitle is-6">Contact me </h6>
                    <span className="about-me">Telegram&nbsp;
                        <a rel='noopener noreferrer' target='_blank' href='https://t.me/Tivsae'>@Tivsae</a>
                    </span>
                    <br />
                    <span className="about-me">Twitter&nbsp;
                        <a rel='noopener noreferrer' target='_blank' href='https://twitter.com/wincer_chan'>@wincer_chan</a>
                    </span>
                    <br />
                    <span className="about-me">Email&nbsp;
                        <a href={this.emailAddr} className="abuse-email" rel='noopener noreferrer' target='_blank'>WincerChan@<span className="NotShow">fuck</span>gmail.com</a>
                    </span>
                </div>
                <button className="modal-close is-large" aria-label="close" onClick={this.props.closeModal}></button>
            </div>
        )
    }

}


Modal.propTypes = {
    closeModal: PropTypes.func.isRequired,
    modalState: PropTypes.bool.isRequired,
    title: PropTypes.string
}
class Contact extends Component {
    constructor(props) {
        super(props);

        this.state = {
            modalState: false
        };

        this.toggleModal = this.toggleModal.bind(this);
    }

    base64ToEmail() {
        console.log(document.querySelector('.contact-menu'))
        setTimeout(() => {
            var email = document.querySelector(".abuse-email")
            email.href = atob("bWFpbHRvOldpbmNlckNoYW5AZ21haWwuY29t")
        }, 100)

    }

    toggleModal() {
        this.setState((prev, props) => {
            const newState = !prev.modalState;

            return { modalState: newState };
        });
    }

    render() {
        return (
            <div>
                <a className="contact-menu showdelay" onClick={this.toggleModal}>
                    <img className="contact-icon" src={ContactIcon} alt="" />
                </a>
                <Modal
                    closeModal={this.toggleModal}
                    modalState={this.state.modalState}
                    title="Example modal title">
                </Modal>
            </div>
        );
    }
}

export default Contact;