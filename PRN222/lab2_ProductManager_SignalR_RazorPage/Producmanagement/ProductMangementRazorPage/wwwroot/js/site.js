
// Tạo kết nối tới Hub
const connection = new signalR.HubConnectionBuilder().withUrl("/signalRServer").build();

// Xử lý sự kiện khi nhận được từ server
connection.on("LoadAllItems", () => {
    console.log("Received 'LoadAllItems' from server");
    window.location.href = '/Products/Index';
});

// Bắt đầu kết nối
connection.start()
    .then(() => console.log("SignalR connected successfully."))
    .catch(err => console.error("SignalR connection error:", err));
