# 📖 HƯỚNG DẪN SỬ DỤNG HỆ THỐNG TÀI CHÍNH & GIÁ VỐN
### Cửa Hàng Thực Phẩm Chay Bình Loan — Cao Lãnh, Đồng Tháp

> Tài liệu hướng dẫn thao tác chi tiết, đơn giản dành cho chủ cửa hàng, thu ngân và kế toán quản lý thu chi, dòng tiền và giá vốn hàng ngày.

---

## 📌 MỤC LỤC
1. [Cách mở và truy cập hệ thống](#1-cách-mở-và-truy-cập-hệ-thống)
2. [Giao diện & 4 tab chức năng chính](#2-giao-diện--4-tab-chức-năng-chính)
3. [Hướng dẫn ghi nhận Thu — Chi hàng ngày](#3-hướng-dẫn-ghi-nhận-thu--chi-hàng-ngày)
4. [Hướng dẫn xem và quản trị Giá Vốn (COGS)](#4-hướng-dẫn-xem-và-quản-trị-giá-vốn-cogs)
5. [Hướng dẫn theo dõi kho và vốn tồn kho](#5-hướng-dẫn-theo-dõi-kho-và-vốn-tồn-kho)
6. [Xuất file Excel, In ấn và Sao lưu dữ liệu](#6-xuất-file-excel-in-ấn-và-sao-lưu-dữ-liệu)
7. [Các câu hỏi thường gặp (FAQ)](#7-các-câu-hỏi-thường-gặp-faq)

---

## 1. Cách mở và truy cập hệ thống
- **Trên máy tính:** Mở file `finance.html` bằng bất kỳ trình duyệt nào (Google Chrome, Cốc Cốc, Safari, Edge).
- **Trên điện thoại:** Bạn có thể truy cập qua đường link website GitHub Pages hoặc lưu lối tắt ra màn hình chính (Add to Home Screen) để dùng như một ứng dụng di động.
- **Từ trang chủ:** Tại trang chủ `index.html`, bấm vào nút **"📊 Thu Chi & Giá Vốn"** trên thanh Menu trên cùng hoặc nút **"Quản Trị Giá Vốn & Dòng Tiền 📊"** ở banner chính.

---

## 2. Giao diện & 4 tab chức năng chính

Hệ thống được chia thành 4 khu vực làm việc rõ ràng:
1. **📊 Tổng Quan & Dòng Tiền:** Xem nhanh số dư tiền mặt hiện tại, tổng thu, tổng chi, điểm hòa vốn và biểu đồ trực quan.
2. **💵 Sổ Thu Chi & Báo Cáo P&L:** Sổ tay ghi chép từng giao dịch thu tiền vào và chi tiền ra; báo cáo lãi/lỗ thực tế.
3. **🏷️ Bảng Tính Giá Vốn & Định Giá:** Danh mục 41 món chay (Đóng lon, Đông lạnh, Hàng mát, Hàng khô) với công thức tính giá vốn tự động.
4. **📦 Quản Lý Kho & Vốn Hàng Hóa:** Thống kê lượng tồn kho và tổng số tiền vốn đang nằm trong kho hàng.

---

## 3. Hướng dẫn ghi nhận Thu — Chi hàng ngày

Mỗi khi phát sinh giao dịch bán hàng hoặc chi trả tiền, bạn thực hiện 3 bước:

### Bước 1: Mở form nhập liệu
- Bấm vào tab **`💵 Sổ Thu Chi & Báo Cáo P&L`**.
- Bấm nút xanh **`➕ Ghi Nhận Thu / Chi Mới`**.

### Bước 2: Điền thông tin giao dịch
- **Loại giao dịch:**
  - `⬇ Thu Tiền Vào`: Chọn khi có doanh thu bán lẻ, tiền khách sỉ thanh toán, bán online...
  - `⬆ Chi Tiền Ra`: Chọn khi trả tiền mua nguyên liệu, tiền điện lạnh, tiền lương, tiền mặt bằng, tiền túi/hộp/tem...
- **Ngày:** Mặc định là ngày hôm nay, có thể bấm chọn ngày khác nếu ghi bù.
- **Danh mục:** Chọn danh mục phù hợp (ví dụ: *Bán lẻ tại quầy*, *Điện & Kho lạnh*...).
- **Số tiền (VNĐ):** Nhập số tiền (ví dụ: `500000` hoặc `1200000`).
- **Hình thức:** Chọn *Tiền mặt* hoặc *Chuyển khoản (VietQR)*.
- **Đối tác / Khách hàng:** Ghi tên khách mua sỉ hoặc tên nhà cung cấp (tùy chọn).
- **Ghi chú:** Ghi chú nội dung chuyến hàng, số hóa đơn (tùy chọn).

### Bước 3: Lưu lại
- Bấm nút **`Lưu Giao Dịch`**.
- Giao dịch sẽ hiện ngay trên danh sách, và số dư tiền mặt của quán sẽ tự động cộng/trừ lập tức.

> 💡 **Mẹo:** Muốn xóa một giao dịch bị ghi nhầm, chỉ cần bấm nút **`Xóa`** ở cột cuối cùng của dòng đó.

---

## 4. Hướng dẫn xem và quản trị Giá Vốn (COGS)

Tab **`🏷️ Bảng Tính Giá Vốn & Định Giá`** là trái tim của hệ thống định giá sản phẩm:

### A. Hiểu công thức tính giá vốn của cửa hàng:
Hệ thống sử dụng đúng công thức tài chính chuẩn trong bảng tính của Bình Loan:
- **Giá sau VAT:** $\text{Đơn giá gốc} \times 1.08$ (thuế VAT 8%)
- **Thuế khoán Hộ Kinh Doanh:** $\text{Giá sau VAT} \times 1.5\%$ (thuế GTGT + TNCN)
- **Phí kho lạnh bảo quản:** $\text{Đơn giá gốc} \times 1\%$ (bảo quản đông/mát)
- **👉 GIÁ COST (Giá vốn thực tế):** Tổng các khoản trên.
- **👉 Giá lẻ tham khảo (+30%):** $\text{Giá Cost} \times 1.30$
- **👉 Giá sỉ tham khảo (+20%):** $\text{Giá Cost} \times 1.20$

### B. Ý nghĩa các nhãn màu cảnh báo (Biên lợi nhuận):
- 🟢 **Màu Xanh (Lãi tốt $\ge 25\%$):** Sản phẩm có tỷ suất lợi nhuận cao, kinh doanh rất an toàn.
- 🟡 **Màu Vàng (Lãi trung bình $15\% - 25\%$):** Lợi nhuận vừa phải, cần giữ giá ổn định.
- 🔴 **Màu Đỏ (Cảnh báo $< 15\%$ hoặc Lỗ):** Giá bán đang quá sát giá vốn hoặc bị bán lỗ sau khi tính đủ thuế và điện lạnh $\to$ Cần điều chỉnh tăng giá bán lẻ hoặc đàm phán giảm giá nhập.

### C. Cách cập nhật giá nhập hoặc thêm món mới:
- **Sửa nhanh giá nhập:** Bạn có thể bấm thẳng vào ô số tại cột **`Đơn Giá Nhập (G)`** trên bảng để gõ số mới $\to$ Giá Cost và Giá bán lẻ/sỉ đề xuất sẽ tự động tính lại ngay!
- **Thêm mặt hàng mới:** Bấm nút **`➕ Thêm Mặt Hàng`**, điền tên món, chọn nhóm hàng, nhập giá nhập gốc và bấm **Lưu**.

---

## 5. Hướng dẫn theo dõi kho và vốn tồn kho

Vào tab **`📦 Quản Lý Kho & Vốn Hàng Hóa`**:
- Bạn sẽ thấy 4 thẻ thống kê ở trên cùng:
  - **Tổng số lượng tồn kho:** Số lon, số khay, số kg hàng đang có.
  - **Tổng vốn tồn kho (Theo Cost):** Tổng số tiền vốn bạn đã bỏ ra để nhập số hàng này.
  - **Doanh thu kỳ vọng:** Số tiền thu về nếu bán hết số hàng đó theo giá niêm yết.
  - **Lợi nhuận gộp kỳ vọng:** Số tiền lãi thu được.
- **Cập nhật số lượng tồn:** Gõ trực tiếp số lượng thực tế vào ô ở cột **`Số Lượng Tồn`**.

---

## 6. Xuất file Excel, In ấn và Sao lưu dữ liệu

Trên thanh Menu trên cùng có các nút chức năng rất tiện lợi:

1. **📥 Xuất Thu Chi:** Tải về máy tính file Excel/CSV chứa toàn bộ sổ thu chi để gửi cho kế toán.
2. **📥 Xuất Bảng Giá Vốn:** Tải về file Excel/CSV bảng tính giá vốn của 41 mặt hàng.
3. **🖨️ In A4:** Bấm để in ngay bảng báo cáo tài chính ra máy in hoặc lưu thành file PDF khổ A4.
4. **💾 Sao Lưu:** Tải về một file bản quyền `.json` lưu lại toàn bộ dữ liệu hiện tại của quán. Hãy bấm sao lưu định kỳ mỗi tuần hoặc mỗi tháng!
5. **📤 Khôi Phục:** Khi đổi máy tính mới hoặc muốn khôi phục lại dữ liệu cũ, chỉ cần bấm nút này và chọn file đã sao lưu.
6. **🔄 Mặc Định:** Đưa tất cả số liệu về nguyên bản ban đầu từ file Google Sheet của Bình Loan.

---

## 7. Các câu hỏi thường gặp (FAQ)

**Hỏi: Khi tôi tắt trình duyệt hoặc tắt máy, dữ liệu có bị mất không?**  
*Trả lời:* Hoàn toàn không. Hệ thống tự động lưu vào bộ nhớ cục bộ (`localStorage`) của trình duyệt trên máy của bạn. Khi mở lại trang, mọi số liệu thu chi vẫn còn nguyên vẹn.

**Hỏi: Tôi không có mạng Internet thì có dùng được không?**  
*Trả lời:* Có. Ứng dụng hoạt động hoàn toàn Offline trên trình duyệt máy tính hoặc điện thoại mà không cần mạng Internet liên tục.

**Hỏi: Tôi có thể sử dụng trên nhiều điện thoại khác nhau không?**  
*Trả lời:* Có. Bạn chỉ cần mở trang web trên điện thoại đó. Để đồng bộ dữ liệu giữa các máy, bạn dùng nút **`💾 Sao Lưu`** trên máy cũ rồi gửi file đó sang máy mới và bấm **`📤 Khôi Phục`**.

---
*Tài liệu soạn thảo phục vụ Cửa hàng Thực phẩm Chay Bình Loan — Đồng Tháp.*
