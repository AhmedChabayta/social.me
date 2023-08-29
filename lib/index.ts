import axios from "axios";
import moment from "moment";

export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
interface Post {
  _createdAt: Date; // Assuming this is the property for post creation date
}

export function timeSince(date: Date) {
 const createdAt = moment(date);
 const currentDate = moment();
 const duration = moment.duration(currentDate.diff(createdAt));

 if (duration.asWeeks() >= 1) {
   return `${Math.floor(duration.asWeeks())} week${
     Math.floor(duration.asWeeks()) > 1 ? "s" : ""
   } ago`;
 } else if (duration.asDays() >= 1) {
   return `${Math.floor(duration.asDays())} day${
     Math.floor(duration.asDays()) > 1 ? "s" : ""
   } ago`;
 } else if (duration.asHours() >= 1) {
   return `${Math.floor(duration.asHours())} hour${
     Math.floor(duration.asHours()) > 1 ? "s" : ""
   } ago`;
 } else if (duration.asMinutes() >= 1) {
   return `${Math.floor(duration.asMinutes())} minute${
     Math.floor(duration.asMinutes()) > 1 ? "s" : ""
   } ago`;
 } else {
   return `${Math.floor(duration.asSeconds())} second${
     Math.floor(duration.asSeconds()) !== 1 ? "s" : ""
   } ago`;
 }
}
