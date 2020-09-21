import React from "react";
import PropTypes from "prop-types";
import { ContactListItem } from "../ContactListItem/ContactListItem";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./ContactList.css";

export const ContactList = ({
  showContactListItem,
  contacts,
  onRemoveContact,
}) => (
  <TransitionGroup component="ul" className="ContactList">
    {contacts.map(({ id, text, number }) => (
      <CSSTransition key={id} timeout={250} classNames="TaskListSlide">
        <ContactListItem
          key={id}
          text={text}
          number={number}
          onRemove={() => onRemoveContact(id)}
        />
      </CSSTransition>
    ))}
  </TransitionGroup>
);

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onRemoveContact: PropTypes.func.isRequired,
};
