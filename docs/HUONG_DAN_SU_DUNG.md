# 📖 HƯỚNG DẪN SỬ DỤNG HỆ THỐNG ERP MINI, BÁN HÀNG & GIÁ VỐN
### Cửa Hàng Thực Phẩm Chay Bình Loan — Cao Lãnh, Đồng Tháp

> Tài liệu hướng dẫn sử dụng chi tiết, đơn giản dành cho chủ cửa hàng, nhân viên bán hàng và thu ngân: Quản lý đơn hàng (POS) theo món, báo cáo xuất - nhập - tồn (X-N-T), quản lý khách hàng & công nợ, và bảng tính giá vốn & giá sỉ niêm yết.

---

## 📌 MỤC LỤC
1. [Cách mở và truy cập hệ thống](#1-cách-mở-và-truy-cập-hệ-thống)
2. [Giao diện & 6 Phân hệ chức năng chính](#2-giao-diện--6-phân-hệ-chức-năng-chính)
3. [Phân hệ 1: Bán hàng theo món (POS) & In hóa đơn](#3-phân-hệ-1-bán-hàng-theo-món-pos--in-hóa-đơn)
4. [Phân hệ 2: Báo cáo Xuất - Nhập - Tồn (X-N-T) & Nhập kho](#4-phân-hệ-2-báo-cáo-xuất---nhập---tồn-x-n-t--nhập-kho)
5. [Phân hệ 3: Quản lý Khách hàng & Thu hồi Công nợ](#5-phân-hệ-3-quản-lý-khách-hàng--thu-hồi-công-nợ)
6. [Phân hệ 4: Bảng tính Giá Vốn (COGS) & Cột Giá Sỉ Niêm Yết](#6-phân-hệ-4-bảng-tính-giá-vốn-cogs--cột-giá-sỉ-niêm-yết)
7. [Phân hệ 5: Sổ Quỹ Thu Chi & Báo cáo Lãi Lỗ (P&L)](#7-phân-hệ-5-sổ-quỹ-thu-chi--báo-cáo-lãi-lỗ-pl)
8. [Xuất file Excel, In ấn và Sao lưu dữ liệu](#8-xuất-file-excel-in-ấn-và-sao-lưu-dữ-liệu)
9. [Các câu hỏi thường gặp (FAQ)](#9-các-câu-hỏi-thường-gặp-faq)

---

## 1. Cách mở và truy cập hệ thống
- **Trên máy tính:** Mở file `finance.html` bằng bất kỳ trình duyệt nào (Google Chrome, Cốc Cốc, Safari, Edge).
- **Trên điện thoại:** Truy cập qua đường link website GitHub Pages hoặc lưu lối tắt ra màn hình chính (Add to Home Screen) để dùng như một ứng dụng di động.
- **Từ trang chủ:** Tại trang chủ `index.html`, bấm vào nút **"📊 Thu Chi & Giá Vốn"** trên thanh Menu trên cùng.

---

## 2. Giao diện & 6 Phân hệ chức năng chính

Hệ thống được thiết kế với 6 tab nghiệp vụ trực quan:
1. **📊 Tổng Quan & Dòng Tiền:** Thống kê tiền mặt khả dụng, tổng thu, tổng chi, vốn tồn kho, tổng nợ phải thu và biểu đồ trực quan.
2. **🛒 Đơn Hàng & Bán Hàng (POS):** Tạo đơn hàng bán lẻ / bán sỉ chi tiết theo từng món, giỏ hàng, tự động trừ tồn kho và in phiếu bán hàng.
3. **📦 Báo Cáo Xuất - Nhập - Tồn (X-N-T):** Thống kê chi tiết số lượng Tồn đầu kỳ, Nhập trong kỳ, Xuất trong kỳ, Tồn cuối kỳ và tổng giá trị vốn kho cho 41 mặt hàng.
4. **🏷️ Bảng Giá Vốn & Giá Sỉ Niêm Yết:** Tính toán giá cost đầy đủ (+8% VAT, 1.5% Thuế khoán, 1% Điện lạnh); cho phép chỉnh sửa giá sỉ niêm yết trực tiếp.
5. **👥 Khách Hàng & Công Nợ:** Danh bạ đại lý, chùa, khách lẻ; theo dõi tiền mua hàng tích lũy và nút **Thu Nợ** nhanh.
6. **💵 Sổ Thu Chi & Báo Cáo P&L:** Sổ quỹ ghi chép các khoản thu chi ngoài bán hàng (tiền điện, lương, mặt bằng, bao bì...).

---

## 3. Phân hệ 1: Bán hàng theo món (POS) & In hóa đơn

Mỗi khi có khách mua lẻ tại quầy hoặc đại lý lên đơn sỉ, bạn làm như sau:

### Bước 1: Mở màn hình tạo đơn
- Vào tab **`🛒 Đơn Hàng & Bán Hàng (POS)`**.
- Bấm nút **`➕ Tạo Đơn Hàng Mới`**.

### Bước 2: Chọn khách hàng và loại đơn
- Chọn khách hàng trong danh bạ (hoặc nhập tên khách mới vào ô tùy chọn).
- Chọn **Loại đơn:**
  - `Bán Lẻ Tại Quầy`: Hệ thống tự động áp dụng giá bán lẻ niêm yết.
  - `Bán Sỉ Đại Lý / Chùa`: Hệ thống tự động áp dụng giá sỉ niêm yết.

### Bước 3: Thêm các món chay vào giỏ
- Chọn món trong danh sách (kèm số lượng tồn kho hiển thị sẵn để tránh bán vượt tồn).
- Điền số lượng cần bán và bấm **`➕ Thêm Món`**. Bạn có thể thêm nhiều món vào đơn.
- Trong giỏ hàng, bạn có thể chỉnh sửa lại số lượng hoặc bấm nút `✕` để xóa bớt món.

### Bước 4: Thanh toán và ghi nợ
- Hệ thống tự động tính: **Tổng tiền hàng**, **Tiền vốn**, **Lợi nhuận gộp**.
- Nhập số tiền chiết khấu / giảm giá (nếu có).
- Nhập **Tiền khách đưa / thanh toán ngay**:
  - Nếu khách trả đủ: Đơn hàng hoàn tất.
  - Nếu khách trả một phần hoặc nợ 100%: Số tiền còn lại sẽ tự động ghi vào **Công nợ gối đầu** của khách hàng đó!
- Bấm **`💾 Hoàn Tất & Lưu Đơn Hàng`**.
- Hệ thống sẽ tự động trừ kho các món đã bán và hiện ngay **Phiếu bán hàng** để bạn bấm **`🖨️ In Phiếu Bán Hàng`** giao cho khách.

---

## 4. Phân hệ 2: Báo cáo Xuất - Nhập - Tồn (X-N-T) & Nhập kho

Vào tab **`📦 Báo Cáo Xuất - Nhập - Tồn (X-N-T)`**:
- Bạn sẽ thấy bảng tổng hợp 41 món chay:
  - **Tồn Đầu:** Số lượng tồn kho đầu kỳ.
  - **Nhập (+):** Số lượng hàng nhập thêm vào kho.
  - **Xuất (-):** Số lượng hàng đã xuất bán (tự động cập nhật khi lên đơn hàng).
  - **Tồn Cuối:** Số lượng thực tế còn lại trong kho ($	ext{Tồn Cuối} = 	ext{Tồn Đầu} + 	ext{Nhập} - 	ext{Xuất}$).
  - **Tổng Vốn Tồn Kho (VNĐ):** Định giá theo Giá Cost thực tế.

### Cách nhập hàng mới vào kho:
- Bấm nút **`📥 Nhập Hàng Vào Kho`**.
- Chọn mặt hàng, điền số lượng nhập, đơn giá nhập và nhà cung cấp / xưởng sản xuất.
- Đánh dấu vào ô *"Đồng thời tạo giao dịch Chi Tiền trong Sổ Quỹ Thu Chi"* nếu bạn đã thanh toán tiền nhập hàng.
- Bấm **`Xác Nhận Nhập Kho`**. Tồn kho sẽ tự động tăng lên ngay lập tức.

---

## 5. Phân hệ 3: Quản lý Khách hàng & Thu hồi Công nợ

Vào tab **`👥 Khách Hàng & Công Nợ`**:
- Quản lý danh sách đối tác: Đại lý sỉ (An Lạc, Tâm Đức...), các Chùa / Bếp ăn từ thiện và khách lẻ thân thiết.
- Cột **Tổng Doanh Số Mua:** Thống kê uy tín và quy mô mua hàng của từng khách.
- Cột **Công Nợ Hiện Tại:** Nhãn màu đỏ cảnh báo số tiền khách đang nợ gối đầu.

### Cách ghi nhận khi khách trả nợ:
- Khi khách hàng chuyển khoản hoặc trả tiền mặt để trả nợ cũ, bạn bấm nút **`💵 Thu Nợ`** tại dòng của khách đó.
- Điền số tiền khách trả (hệ thống có thể thu một phần hoặc toàn bộ số nợ).
- Chọn phương thức thanh toán (Tiền mặt hoặc VietQR).
- Bấm **`Xác Nhận Thu Nợ & Ghi Quỹ`**.
- Công nợ của khách sẽ tự động giảm xuống, đồng thời quỹ tiền mặt/ngân hàng tự động được ghi nhận khoản thu tiền.

---

## 6. Phân hệ 4: Bảng tính Giá Vốn (COGS) & Cột Giá Sỉ Niêm Yết

Vào tab **`🏷️ Bảng Giá Vốn & Giá Sỉ Niêm Yết`**:

### Công thức kế toán chuẩn của Bình Loan:
- **Giá sau VAT:** $	ext{Đơn giá gốc} 	imes 1.08$ (thuế VAT 8%)
- **Thuế khoán Hộ Kinh Doanh:** $	ext{Giá sau VAT} 	imes 1.5\%$ (thuế GTGT + TNCN)
- **Phí kho lạnh bảo quản:** $	ext{Đơn giá gốc} 	imes 1\%$ (bảo quản đông/mát)
- **👉 GIÁ COST:** Giá vốn đầy đủ một đơn vị sản phẩm.
- **👉 Giá lẻ tham khảo (+30%):** $	ext{Giá Cost} 	imes 1.30$
- **👉 Giá sỉ tham khảo (+20%):** $	ext{Giá Cost} 	imes 1.20$

### Cột Giá Sỉ Niêm Yết điều chỉnh:
- Cột **`Giá Sỉ Niêm Yết`** có nền màu vàng ấm. Bạn có thể **bấm trực tiếp vào ô số** để điều chỉnh giá sỉ thực tế giao cho đại lý.
- Ngay bên cạnh là cột **Biên Lãi Sỉ (%)** kèm số tiền lãi thực tế trên mỗi đơn vị sản phẩm:
  - 🟢 **Màu xanh:** Lãi sỉ an toàn ($\ge 15\%$).
  - 🟡 **Màu vàng:** Lãi sỉ chấp nhận được ($8\% - 15\%$).
  - 🔴 **Màu đỏ:** Cảnh báo lãi quá mỏng hoặc dưới giá vốn ($< 8\%$).

---

## 7. Phân hệ 5: Sổ Quỹ Thu Chi & Báo cáo Lãi Lỗ (P&L)

Vào tab **`💵 Sổ Thu Chi & Báo Cáo P&L`**:
- Dùng để ghi nhận các khoản thu chi phát sinh ngoài bán hàng:
  - **Khoản Chi:** Tiền điện tủ đông kho lạnh, tiền thuê mặt bằng, tiền ứng lương cho nhân viên, tiền bao bì lon nhôm tem nhãn, phí gửi chành xe...
  - **Khoản Thu:** Thu tiền phế liệu, thu khác...
- Bấm nút **`➕ Ghi Nhận Thu / Chi Mới`**, điền thông tin và bấm **`Lưu Giao Dịch`**.

---


---

## 8. Phân hệ 6: Báo Cáo Doanh Thu & Kê Khai Thuế Hộ Kinh Doanh (TT 40/2021/TT-BTC)

Vào tab **`📑 Báo Cáo Doanh Thu & Thuế (HKD)`**:
- **Căn cứ pháp lý:** Thông tư 40/2021/TT-BTC & Thông tư 88/2021/TT-BTC hướng dẫn chế độ kế toán và thuế cho hộ kinh doanh ngành phân phối, bán buôn bán lẻ thực phẩm:
  - **Thuế GTGT:** 1.0% trên tổng doanh thu.
  - **Thuế TNCN:** 0.5% trên tổng doanh thu.
  - 👉 **Tổng nghĩa vụ thuế:** **1.5% Doanh thu**.
- **Tự động hóa 100%:** Khi bán đơn hàng (bán lẻ hoặc bán sỉ), doanh thu tự động chảy vào bảng kê theo từng tháng và quý.
- **Tải bảng kê:** Bấm **`📥 Tải Bảng Kê Thuế (Excel/CSV)`** để nộp báo cáo đối chiếu cho Chi Cục Thuế TP. Cao Lãnh.

## 9. Xuất file Excel, In ấn và Sao lưu dữ liệu

Trên thanh Menu trên cùng có sẵn các nút thao tác nhanh:
1. **📥 Xuất Đơn Hàng:** Tải file Excel danh sách tất cả các đơn hàng, phân tích doanh thu và lãi gộp.
2. **📥 Xuất X-N-T:** Tải báo cáo xuất nhập tồn kho 41 mặt hàng.
3. **📥 Xuất Khách Hàng:** Tải danh bạ khách hàng kèm số dư công nợ.
4. **📥 Xuất Giá Vốn & Sỉ:** Tải bảng định giá vốn và giá sỉ niêm yết.
5. **📥 Xuất Thu Chi:** Tải sổ thu chi dòng tiền.
6. **💾 Sao Lưu:** Tải về file `.json` chứa toàn bộ dữ liệu của cửa hàng. Hãy bấm sao lưu định kỳ!
7. **📤 Khôi Phục:** Tải lại dữ liệu khi chuyển sang máy tính hoặc điện thoại khác.
8. **🔄 Mặc Định:** Khôi phục lại dữ liệu nguyên bản ban đầu từ file Google Sheet của Bình Loan.

---

## 10. Các câu hỏi thường gặp (FAQ)

**Hỏi: Khi tôi tắt trình duyệt hoặc tắt máy, dữ liệu bán hàng và kho có bị mất không?**  
*Trả lời:* Hoàn toàn không. Toàn bộ dữ liệu đơn hàng, kho hàng, khách hàng và thu chi được lưu tự động trên bộ nhớ trình duyệt (`localStorage`).

**Hỏi: Cửa hàng mất mạng Internet thì có bán hàng và xem tồn kho được không?**  
*Trả lời:* Hoàn toàn được. Ứng dụng hoạt động 100% Offline (không phụ thuộc vào mạng Internet).

---
*Tài liệu hướng dẫn sử dụng phiên bản 2.0 — Cửa hàng Thực phẩm Chay Bình Loan (Cao Lãnh, Đồng Tháp).*
