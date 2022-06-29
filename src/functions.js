// 1
import { message, data1 } from "./data";
// 2
import data2 from "./data";

function displayMessage() {
    alert(message);
    alert(data2.message);
}

export const dataMessage = displayMessage();