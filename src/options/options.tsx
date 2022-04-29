import creditCard from "../assets/credit_card_black_24dp.svg";
import webLogin from "../assets/language_black_24dp.svg";
import bankAccount from "../assets/account_balance_black_24dp.svg";
import mailPassword from "../assets/contact_mail_black_24dp.svg";

export const options = [
  {
    typeName: "Password",
    color: "#b7eb8f",
    pathImg: mailPassword,
    titleName: "",
    pathName: "/password",
    id: 0,
  },
  {
    typeName: "Credit Card",
    color: "#61dafb",
    pathImg: creditCard,
    titleName: "",
    pathName: "/credit-card",
    id: 1,
  },
  {
    typeName: "Web login",
    color: "#ffccc7",
    pathImg: webLogin,
    titleName: "",
    pathName: "/web-login",
    id: 2,
  },
  {
    typeName: "Bank Account",
    color: "#ffeb3b",
    pathImg: bankAccount,
    titleName: "",
    pathName: "/bank-account",
    id: 3,
  },
];
