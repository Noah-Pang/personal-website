import React, { Component } from "react";
import { Navbar, NavDropdown, Container } from "react-bootstrap";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 50px;
  z-index: 10;
`;

export const Card = styled.div`
  overflow: hidden;
  box-shadow: 0 2px 20px #e1e5ee;
  border-radius: 0.2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  transition: transform 200ms ease-in;

  &__image {
    height: 12rem;
    width: 100%;
    object-fit: cover;
  }

  &__title {
    padding: 1rem;
  }

  &__description {
    padding: 0 1rem;
  }

  &__btn{
    padding: 1rem;
    font-weight: bold;
    font-size: 1rem;
    margin: 1rem;
    border: 2px solid #d50000;
    background: transparent;
    color: #d50000;
    border-radius: 0.2rem;
    transition: background 200ms ease-in, color 200ms ease-in;
  }

  &:hover {
    transform: scale(1.02);
  }

  &:hover &__btn{
    background: #d50000;
    color: white;
  }
`;

export const Image = styled.div`
  height: 12rem;
  width: 100%;
  object-fit: cover;
`;

export const Title = styled.div`
  padding: 1rem;
`;

export const Description = styled.div`
  padding: 0 1rem;
`;
export const Button = styled.div`
  padding: 1rem;
  font-weight: bold;
  font-size: 1rem;
  margin: 1rem;
  border: 2px solid #d50000;
  background: transparent;
  color: #d50000;
  border-radius: 0.2rem;
  transition: background 200ms ease-in, color 200ms ease-in;

  &:hover {
    background: #d50000;
    color: white;
  }
`;
