document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("actionButton");

    button.addEventListener("click", function () {
        // Kiểm tra xem đã hiển thị tên chưa, nếu chưa thì thêm vào
        if (!document.getElementById("teamMembers")) {
            const memberList = document.createElement("ul");
            memberList.id = "teamMembers";

            const members = ["Tom", "Jerry", "Spike"];
            members.forEach(function (name) {
                const li = document.createElement("li");
                li.textContent = name;
                memberList.appendChild(li);
            });

            document.querySelector("main").appendChild(memberList);
        }
    });
});
