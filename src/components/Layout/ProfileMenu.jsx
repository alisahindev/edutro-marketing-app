import React from "react";
import { useHistory } from "react-router-dom";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

const menu = [
  {
    title: "Sorularim",
    link: "#"
  },
  {
    title: "Bildirimler",
    link: "#"
  },
  {
    title: "Favori Kurslarim",
    link: "#"
  },
  {
    title: "Çıkış Yap",
    link: "#"
  }
];

export const ProfileMenu = ({ logOut }) => {
  let history = useHistory();
  return (
    <UncontrolledDropdown style={{ marginTop: "10px" }}>
      <DropdownToggle color="primary" caret>
        Hesabım
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem onClick={() => history.push("/sorularim")}>
          Sorularım
        </DropdownItem>
        <DropdownItem onClick={() => history.push("/bildirimler")}>
          Bildirimler
        </DropdownItem>
        <DropdownItem>Favori Kurslarim</DropdownItem>
        <DropdownItem onClick={logOut}>Çıkış Yap</DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  );
};
