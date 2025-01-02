import { Dioceses, Parish } from "../types/diocese";

export const sampleParish: Parish[] = [
  {
    _id: "1",
    id:"1",
    name: "Parish 1",
    address: "",
    phone: "",
    email: "",
    image: "",
    description: "",
    diocese: "1",
    budgetAllocation: 70000,
    budgetYear: 2025,
    budgetQuarter: 1,

  },
  {
    id: "2",
    _id: "1",
    name: "Parish 2",
    address: "",
    phone: "",
    email: "",
    image: "",
    description: "",
    diocese: "1",
    budgetAllocation: 20000,
    budgetYear: 2025,
    budgetQuarter: 1,

  },
  {
    id: "3",
    _id: "3",
    name: "Parish 3",
    address: "",
    phone: "",
    email: "",
    image: "",
    description: "",
    diocese: "1",
    budgetAllocation: 20000,
    budgetYear: 2025,
    budgetQuarter: 1,
  },
];

export const sampleDiocese: Dioceses = {
    id: "1",
  _id: "1",
  name: "Makeni Diocese",
  address: "",
  phone: "",
  email: "",
  image: "",
  description: "",
  parish: sampleParish,
  budgetAllocation: 1000000,
  budgetYear: 2025,
  budgetQuarter: 1,
};
