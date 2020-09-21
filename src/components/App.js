import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import { v4 as uuidv4 } from "uuid";
import { ContactList } from "./ContactList/ContactList";
import { ContactForm } from "./ContactForm/ContactForm";
import { Filter } from "./Filter/Filter";
import Notification from "./Notification/Notification";
import PhonebookTitle from "./PhonebookTitle/PhonebookTitle";
import checkSameContact from "../helpers/checkSameContact";
import "./styles.css";

export class App extends Component {
  state = {
    contacts: [],
    filter: "",
    sameName: null,
    showNotification: false,
    showContactList: false,
    showContactListItem: false,
  };

  componentDidMount() {
    const persistedTasks = localStorage.getItem("contacts");
    if (persistedTasks) {
      this.setState({
        contacts: JSON.parse(persistedTasks),
        showContactList: true,
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.conacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
    let timeoutID;
    if (prevState.showNotification !== this.state.showNotification) {
      timeoutID = setTimeout(
        () => this.setState(() => ({ showNotification: false })),
        3000
      );
    } else {
      clearTimeout(timeoutID);
    }
  }

  changeFilter = (filter) => {
    this.setState({ filter });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter((contact) =>
      contact.text.toLowerCase().includes(filter.toLowerCase())
    );
  };

  handleAddContact = (name, number) => {
    const contactObj = {
      id: uuidv4(),
      text: name,
      number: number,
    };

    let sameName = checkSameContact(contactObj, this.state.contacts);

    if (sameName) {
      this.setState(() => ({
        sameName: sameName.text,
        showNotification: true,
      }));
    } else {
      this.setState((prev) => ({
        contacts: [...prev.contacts, contactObj],
        showContactListItem: true,
      }));
    }
  };

  handlerRemoveContact = (idContact) => {
    this.setState((prev) => ({
      contacts: prev.contacts.filter((contact) => contact.id !== idContact),
    }));
  };

  render() {
    const {
      contacts,
      filter,
      sameName,
      showNotification,
      showContactList,
      showContactListItem,
    } = this.state;
    const visibleContacts = this.getVisibleContacts();

    return (
      <>
        <PhonebookTitle />

        <ContactForm onAddContact={this.handleAddContact} />

        <CSSTransition
          in={showNotification}
          timeout={1000}
          classNames="Fade"
          unmountOnExit
        >
          <Notification name={sameName} />
        </CSSTransition>

        <h2 className={"Contacts"}>Contacts</h2>

        <CSSTransition
          in={contacts.length > 1}
          timeout={1000}
          classNames="Fade"
          unmountOnExit
        >
          <Filter value={filter} changeFilter={this.changeFilter} />
        </CSSTransition>

        <CSSTransition
          in={showContactList}
          timeout={500}
          classNames="SlideIn"
          unmountOnExit
        >
          <ContactList
            showContactListItem={showContactListItem}
            contacts={visibleContacts}
            onRemoveContact={this.handlerRemoveContact}
          />
        </CSSTransition>
      </>
    );
  }
}
