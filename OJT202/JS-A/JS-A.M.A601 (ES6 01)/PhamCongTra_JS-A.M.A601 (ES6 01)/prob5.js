function upper(strings, ...values) {
    return strings.reduce((result, str, i) => {
        const value = values[i];
        const upperValue = typeof value === "string" ? value.toUpperCase() : value;
        return result + str + (upperValue ?? "");
      }, "");
}

var name = "Nguyen Van A", account = "ANV",classname = "Fresher FrontEnd";

console.log(
  upper`Hello ${name} (@${account}), welcome to the ${classname}!!!` ===
    "Hello NGUYEN VAN A (@ANV), welcome to the FRESHER FRONTEND!!!"
);
