/**
 * BÌNH LOAN THỰC PHẨM CHAY — FINANCE ENGINE (COGS & CASH FLOW)
 * Tự động hóa tính giá vốn, biên lợi nhuận sỉ/lẻ, cân đối thu chi và dòng tiền
 */

const SEED_PRODUCTS = [
  {
    "id": "BL-001",
    "category": "SẢN PHẨM ĐÓNG LON",
    "name": "Cơm gạo lức hạt sen 200g",
    "weight": "200g/lon",
    "unit": "Lon",
    "raw_price": 18000.0,
    "vat_price": 19440.0,
    "tax": 292.0,
    "cost_price": 19732.0,
    "retail_suggested": 25651.0,
    "retail_actual": 30000.0,
    "wholesale_suggested": 23677.92,
    "inventory_qty": 1.0
  },
  {
    "id": "BL-002",
    "category": "SẢN PHẨM ĐÓNG LON",
    "name": "Cơm trắng 200g",
    "weight": "200g/lon",
    "unit": "Lon",
    "raw_price": 0,
    "vat_price": 0,
    "tax": 0,
    "cost_price": 0,
    "retail_suggested": 0,
    "retail_actual": 0,
    "wholesale_suggested": 0,
    "inventory_qty": 1.0
  },
  {
    "id": "BL-003",
    "category": "SẢN PHẨM ĐÓNG LON",
    "name": "Chả hộp chay 200g",
    "weight": "200g/lon",
    "unit": "Lon",
    "raw_price": 18000.0,
    "vat_price": 19440.0,
    "tax": 292.0,
    "cost_price": 19732.0,
    "retail_suggested": 25651.0,
    "retail_actual": 30000.0,
    "wholesale_suggested": 23677.92,
    "inventory_qty": 1.0
  },
  {
    "id": "BL-004",
    "category": "SẢN PHẨM ĐÓNG LON",
    "name": "Tàu hủ ky cuộn rong biển sốt cà 200g",
    "weight": "200g/lon",
    "unit": "Lon",
    "raw_price": 25000.0,
    "vat_price": 27000.0,
    "tax": 405.0,
    "cost_price": 27405.0,
    "retail_suggested": 35627.0,
    "retail_actual": 50000.0,
    "wholesale_suggested": 32886.0,
    "inventory_qty": 1.0
  },
  {
    "id": "BL-005",
    "category": "SẢN PHẨM ĐÓNG LON",
    "name": "Tàu hủ ky kho nước dừa 200g",
    "weight": "200g/lon",
    "unit": "Lon",
    "raw_price": 18000.0,
    "vat_price": 19440.0,
    "tax": 292.0,
    "cost_price": 19732.0,
    "retail_suggested": 25651.0,
    "retail_actual": 30000.0,
    "wholesale_suggested": 23677.92,
    "inventory_qty": 1.0
  },
  {
    "id": "BL-006",
    "category": "SẢN PHẨM ĐÓNG LON",
    "name": "Tàu hủ ky nấm bào ngư 200g",
    "weight": "200g/lon",
    "unit": "Lon",
    "raw_price": 34000.0,
    "vat_price": 36720.0,
    "tax": 551.0,
    "cost_price": 37271.0,
    "retail_suggested": 48452.0,
    "retail_actual": 0,
    "wholesale_suggested": 44724.96,
    "inventory_qty": 1.0
  },
  {
    "id": "BL-007",
    "category": "SẢN PHẨM ĐÓNG LON",
    "name": "Tàu hủ ky sen hồng 200g",
    "weight": "200g/lon",
    "unit": "Lon",
    "raw_price": 25000.0,
    "vat_price": 27000.0,
    "tax": 405.0,
    "cost_price": 27405.0,
    "retail_suggested": 35627.0,
    "retail_actual": 45000.0,
    "wholesale_suggested": 32886.0,
    "inventory_qty": 1.0
  },
  {
    "id": "BL-008",
    "category": "SẢN PHẨM ĐÓNG LON",
    "name": "Tàu hủ ky xào sả ớt 200g",
    "weight": "200g/lon",
    "unit": "Lon",
    "raw_price": 18000.0,
    "vat_price": 19440.0,
    "tax": 292.0,
    "cost_price": 19732.0,
    "retail_suggested": 25651.0,
    "retail_actual": 0,
    "wholesale_suggested": 23677.92,
    "inventory_qty": 1.0
  },
  {
    "id": "BL-009",
    "category": "SẢN PHẨM ĐÓNG LON",
    "name": "Mít kho 200g",
    "weight": "200g/lon",
    "unit": "Lon",
    "raw_price": 18000.0,
    "vat_price": 19440.0,
    "tax": 292.0,
    "cost_price": 19732.0,
    "retail_suggested": 25651.0,
    "retail_actual": 0,
    "wholesale_suggested": 23677.92,
    "inventory_qty": 1.0
  },
  {
    "id": "BL-010",
    "category": "SẢN PHẨM ĐÔNG LẠNH",
    "name": "Cơm gạo lứt THK Nấm bào ngư",
    "weight": "300g/khay",
    "unit": "Khay",
    "raw_price": 32000.0,
    "vat_price": 34560.0,
    "tax": 518.0,
    "cost_price": 35078.0,
    "retail_suggested": 45602.0,
    "retail_actual": 0,
    "wholesale_suggested": 42094.08,
    "inventory_qty": 1.0
  },
  {
    "id": "BL-011",
    "category": "SẢN PHẨM ĐÔNG LẠNH",
    "name": "Chả chay lá chuối",
    "weight": "500g/cây",
    "unit": "Đòn",
    "raw_price": 60000.0,
    "vat_price": 64800.0,
    "tax": 972.0,
    "cost_price": 65772.0,
    "retail_suggested": 85504.0,
    "retail_actual": 0,
    "wholesale_suggested": 78926.4,
    "inventory_qty": 1.0
  },
  {
    "id": "BL-012",
    "category": "SẢN PHẨM ĐÔNG LẠNH",
    "name": "Chả chay lớn 500g",
    "weight": "500g/cây",
    "unit": "Đòn",
    "raw_price": 54000.0,
    "vat_price": 58320.0,
    "tax": 875.0,
    "cost_price": 59195.0,
    "retail_suggested": 76953.0,
    "retail_actual": 0,
    "wholesale_suggested": 71033.76,
    "inventory_qty": 1.0
  },
  {
    "id": "BL-013",
    "category": "SẢN PHẨM ĐÔNG LẠNH",
    "name": "Chả chay nhỏ 250g",
    "weight": "250g/cây",
    "unit": "Đòn",
    "raw_price": 28000.0,
    "vat_price": 30240.0,
    "tax": 454.0,
    "cost_price": 30694.0,
    "retail_suggested": 39902.0,
    "retail_actual": 0,
    "wholesale_suggested": 36832.32,
    "inventory_qty": 1.0
  },
  {
    "id": "BL-014",
    "category": "SẢN PHẨM ĐÔNG LẠNH",
    "name": "Phù trúc cuộn",
    "weight": "250g/vỉ",
    "unit": "Vỉ",
    "raw_price": 32000.0,
    "vat_price": 34560.0,
    "tax": 518.0,
    "cost_price": 35078.0,
    "retail_suggested": 45602.0,
    "retail_actual": 0,
    "wholesale_suggested": 42094.08,
    "inventory_qty": 1.0
  },
  {
    "id": "BL-015",
    "category": "SẢN PHẨM ĐÔNG LẠNH",
    "name": "Tàu hủ ky cuộn sả",
    "weight": "200g/vỉ",
    "unit": "Vỉ",
    "raw_price": 34000.0,
    "vat_price": 36720.0,
    "tax": 551.0,
    "cost_price": 37271.0,
    "retail_suggested": 48452.0,
    "retail_actual": 0,
    "wholesale_suggested": 44724.96,
    "inventory_qty": 1.0
  },
  {
    "id": "BL-016",
    "category": "SẢN PHẨM ĐÔNG LẠNH",
    "name": "Tàu hủ ky cọng non",
    "weight": "Kg",
    "unit": "Kg",
    "raw_price": 55000.0,
    "vat_price": 59400.0,
    "tax": 891.0,
    "cost_price": 60291.0,
    "retail_suggested": 78378.0,
    "retail_actual": 0,
    "wholesale_suggested": 72349.2,
    "inventory_qty": 1.0
  },
  {
    "id": "BL-017",
    "category": "SẢN PHẨM ĐÔNG LẠNH",
    "name": "Tàu hủ ky cọng non 500g",
    "weight": "500g/vĩ",
    "unit": "Vỉ",
    "raw_price": 31000.0,
    "vat_price": 33480.0,
    "tax": 502.0,
    "cost_price": 33982.0,
    "retail_suggested": 44177.0,
    "retail_actual": 0,
    "wholesale_suggested": 40778.64,
    "inventory_qty": 1.0
  },
  {
    "id": "BL-018",
    "category": "SẢN PHẨM ĐÔNG LẠNH",
    "name": "Tàu hủ ky cuộn rong biển",
    "weight": "250g/vỉ",
    "unit": "Vỉ",
    "raw_price": 34000.0,
    "vat_price": 36720.0,
    "tax": 551.0,
    "cost_price": 37271.0,
    "retail_suggested": 48452.0,
    "retail_actual": 0,
    "wholesale_suggested": 44724.96,
    "inventory_qty": 1.0
  },
  {
    "id": "BL-019",
    "category": "SẢN PHẨM ĐÔNG LẠNH",
    "name": "Tàu hủ ky lá non",
    "weight": "Kg",
    "unit": "Kg",
    "raw_price": 55000.0,
    "vat_price": 59400.0,
    "tax": 891.0,
    "cost_price": 60291.0,
    "retail_suggested": 78378.0,
    "retail_actual": 0,
    "wholesale_suggested": 72349.2,
    "inventory_qty": 1.0
  },
  {
    "id": "BL-020",
    "category": "SẢN PHẨM ĐÔNG LẠNH",
    "name": "Tàu hủ ky lá non 500g",
    "weight": "500g/vĩ",
    "unit": "Vỉ",
    "raw_price": 31000.0,
    "vat_price": 33480.0,
    "tax": 502.0,
    "cost_price": 33982.0,
    "retail_suggested": 44177.0,
    "retail_actual": 0,
    "wholesale_suggested": 40778.64,
    "inventory_qty": 1.0
  },
  {
    "id": "BL-021",
    "category": "SẢN PHẨM ĐÔNG LẠNH",
    "name": "Tàu hủ ky nấm bào ngư",
    "weight": "300g/khay",
    "unit": "Khay",
    "raw_price": 40000.0,
    "vat_price": 43200.0,
    "tax": 648.0,
    "cost_price": 43848.0,
    "retail_suggested": 57002.0,
    "retail_actual": 0,
    "wholesale_suggested": 52617.6,
    "inventory_qty": 1.0
  },
  {
    "id": "BL-022",
    "category": "SẢN PHẨM ĐÔNG LẠNH",
    "name": "Tàu hủ ky sen hồng",
    "weight": "300g/gói",
    "unit": "Gói",
    "raw_price": 36000.0,
    "vat_price": 38880.0,
    "tax": 583.0,
    "cost_price": 39463.0,
    "retail_suggested": 51302.0,
    "retail_actual": 0,
    "wholesale_suggested": 47355.84,
    "inventory_qty": 1.0
  },
  {
    "id": "BL-023",
    "category": "SẢN PHẨM ĐÔNG LẠNH",
    "name": "Tàu hủ ky sữa",
    "weight": "0,5 Kg/khay",
    "unit": "Khay",
    "raw_price": 25000.0,
    "vat_price": 27000.0,
    "tax": 405.0,
    "cost_price": 27405.0,
    "retail_suggested": 35627.0,
    "retail_actual": 0,
    "wholesale_suggested": 32886.0,
    "inventory_qty": 1.0
  },
  {
    "id": "BL-024",
    "category": "SẢN PHẨM ĐÔNG LẠNH",
    "name": "Tàu hủ ky xào sả ớt",
    "weight": "300g/khay",
    "unit": "Khay",
    "raw_price": 0,
    "vat_price": 0,
    "tax": 0,
    "cost_price": 0,
    "retail_suggested": 0,
    "retail_actual": 0,
    "wholesale_suggested": 0,
    "inventory_qty": 1.0
  },
  {
    "id": "BL-025",
    "category": "SẢN PHẨM ĐÔNG LẠNH",
    "name": "Vò viên chay",
    "weight": "250g/vỉ",
    "unit": "Vỉ",
    "raw_price": 30000.0,
    "vat_price": 32400.0,
    "tax": 486.0,
    "cost_price": 32886.0,
    "retail_suggested": 42752.0,
    "retail_actual": 0,
    "wholesale_suggested": 39463.2,
    "inventory_qty": 1.0
  },
  {
    "id": "BL-026",
    "category": "SẢN PHẨM ĐÔNG LẠNH",
    "name": "Mít kho 300g",
    "weight": "300g/khay",
    "unit": "Khay",
    "raw_price": 30000.0,
    "vat_price": 32400.0,
    "tax": 486.0,
    "cost_price": 32886.0,
    "retail_suggested": 42752.0,
    "retail_actual": 0,
    "wholesale_suggested": 39463.2,
    "inventory_qty": 1.0
  },
  {
    "id": "BL-027",
    "category": "SẢN PHẨM MÁT",
    "name": "Đậu hủ trắng",
    "weight": "250-350g/miếng",
    "unit": "Miếng",
    "raw_price": 4000.0,
    "vat_price": 4320.0,
    "tax": 65.0,
    "cost_price": 4385.0,
    "retail_suggested": 5700.0,
    "retail_actual": 0,
    "wholesale_suggested": 5261.76,
    "inventory_qty": 1.0
  },
  {
    "id": "BL-028",
    "category": "SẢN PHẨM MÁT",
    "name": "Đậu hủ",
    "weight": "1 miếng/hộp",
    "unit": "Hộp",
    "raw_price": 4500.0,
    "vat_price": 4860.0,
    "tax": 73.0,
    "cost_price": 4933.0,
    "retail_suggested": 6413.0,
    "retail_actual": 0,
    "wholesale_suggested": 5919.48,
    "inventory_qty": 1.0
  },
  {
    "id": "BL-029",
    "category": "SẢN PHẨM MÁT",
    "name": "Tàu hủ ky sữa",
    "weight": "500g/ gói",
    "unit": "Hộp",
    "raw_price": 25000.0,
    "vat_price": 27000.0,
    "tax": 405.0,
    "cost_price": 27405.0,
    "retail_suggested": 35627.0,
    "retail_actual": 0,
    "wholesale_suggested": 32886.0,
    "inventory_qty": 1.0
  },
  {
    "id": "BL-030",
    "category": "SẢN PHẨM KHÔ",
    "name": "Khô lưỡi trâu vụn loại 1",
    "weight": "Kg",
    "unit": "Kg",
    "raw_price": 100000.0,
    "vat_price": 108000.0,
    "tax": 1620.0,
    "cost_price": 109620.0,
    "retail_suggested": 142506.0,
    "retail_actual": 0,
    "wholesale_suggested": 131544.0,
    "inventory_qty": 1.0
  },
  {
    "id": "BL-031",
    "category": "SẢN PHẨM KHÔ",
    "name": "Khô lưỡi trâu vụn loại 2",
    "weight": "Kg",
    "unit": "Kg",
    "raw_price": 70000.0,
    "vat_price": 75600.0,
    "tax": 1134.0,
    "cost_price": 76734.0,
    "retail_suggested": 99754.0,
    "retail_actual": 0,
    "wholesale_suggested": 92080.8,
    "inventory_qty": 1.0
  },
  {
    "id": "BL-032",
    "category": "SẢN PHẨM KHÔ",
    "name": "Khô lưỡi trâu 250g",
    "weight": "250g/gói",
    "unit": "Gói",
    "raw_price": 35000.0,
    "vat_price": 37800.0,
    "tax": 567.0,
    "cost_price": 38367.0,
    "retail_suggested": 49877.0,
    "retail_actual": 0,
    "wholesale_suggested": 46040.4,
    "inventory_qty": 1.0
  },
  {
    "id": "BL-033",
    "category": "SẢN PHẨM KHÔ",
    "name": "Tàu hủ ky cọng khô loại 1",
    "weight": "Kg",
    "unit": "Kg",
    "raw_price": 0,
    "vat_price": 0,
    "tax": 0,
    "cost_price": 0,
    "retail_suggested": 0,
    "retail_actual": 0,
    "wholesale_suggested": 0,
    "inventory_qty": 1.0
  },
  {
    "id": "BL-034",
    "category": "SẢN PHẨM KHÔ",
    "name": "Tàu hủ ky cọng khô vụn loại 1",
    "weight": "Kg",
    "unit": "Kg",
    "raw_price": 110600.0,
    "vat_price": 119448.0,
    "tax": 1792.0,
    "cost_price": 121240.0,
    "retail_suggested": 157612.0,
    "retail_actual": 0,
    "wholesale_suggested": 145487.66,
    "inventory_qty": 1.0
  },
  {
    "id": "BL-035",
    "category": "SẢN PHẨM KHÔ",
    "name": "Tàu hủ ky cọng khô vụn loại 2",
    "weight": "Kg",
    "unit": "Kg",
    "raw_price": 70000.0,
    "vat_price": 75600.0,
    "tax": 1134.0,
    "cost_price": 76734.0,
    "retail_suggested": 99754.0,
    "retail_actual": 0,
    "wholesale_suggested": 92080.8,
    "inventory_qty": 1.0
  },
  {
    "id": "BL-036",
    "category": "SẢN PHẨM KHÔ",
    "name": "Tàu hủ ky cọng khô 250g",
    "weight": "250g/gói",
    "unit": "Gói",
    "raw_price": 30000.0,
    "vat_price": 32400.0,
    "tax": 486.0,
    "cost_price": 32886.0,
    "retail_suggested": 42752.0,
    "retail_actual": 0,
    "wholesale_suggested": 39463.2,
    "inventory_qty": 1.0
  },
  {
    "id": "BL-037",
    "category": "SẢN PHẨM KHÔ",
    "name": "Tàu hủ ky lá khô - loại 1",
    "weight": "Kg",
    "unit": "Kg",
    "raw_price": 0,
    "vat_price": 0,
    "tax": 0,
    "cost_price": 0,
    "retail_suggested": 0,
    "retail_actual": 0,
    "wholesale_suggested": 0,
    "inventory_qty": 1.0
  },
  {
    "id": "BL-038",
    "category": "SẢN PHẨM KHÔ",
    "name": "Tàu hủ ky lá khô vụn loại 1",
    "weight": "Kg",
    "unit": "Kg",
    "raw_price": 115000.0,
    "vat_price": 124200.0,
    "tax": 1863.0,
    "cost_price": 126063.0,
    "retail_suggested": 163882.0,
    "retail_actual": 0,
    "wholesale_suggested": 151275.6,
    "inventory_qty": 1.0
  },
  {
    "id": "BL-039",
    "category": "SẢN PHẨM KHÔ",
    "name": "Tàu hủ ky lá khô vụn loại 2",
    "weight": "Kg",
    "unit": "Kg",
    "raw_price": 70000.0,
    "vat_price": 75600.0,
    "tax": 1134.0,
    "cost_price": 76734.0,
    "retail_suggested": 99754.0,
    "retail_actual": 0,
    "wholesale_suggested": 92080.8,
    "inventory_qty": 1.0
  },
  {
    "id": "BL-040",
    "category": "SẢN PHẨM KHÔ",
    "name": "Tàu hủ ky lá khô 250g",
    "weight": "250g/gói",
    "unit": "Gói",
    "raw_price": 30000.0,
    "vat_price": 32400.0,
    "tax": 486.0,
    "cost_price": 32886.0,
    "retail_suggested": 42752.0,
    "retail_actual": 0,
    "wholesale_suggested": 39463.2,
    "inventory_qty": 1.0
  },
  {
    "id": "BL-041",
    "category": "SẢN PHẨM KHÔ",
    "name": "Nấm bào ngư tươi",
    "weight": "",
    "unit": "Kg",
    "raw_price": 45000.0,
    "vat_price": 48600.0,
    "tax": 729.0,
    "cost_price": 49329.0,
    "retail_suggested": 64128.0,
    "retail_actual": 0,
    "wholesale_suggested": 59194.8,
    "inventory_qty": 1.0
  }
];

const SEED_TRANSACTIONS = [
  {
    "id": "TXN-001",
    "date": "2026-09-01",
    "type": "income",
    "category": "Bán lẻ tại quầy",
    "amount": 8500000,
    "payment": "Tiền mặt",
    "note": "Doanh thu bán lẻ ngày mùng 1 đầu tháng",
    "party": "Khách lẻ"
  },
  {
    "id": "TXN-002",
    "date": "2026-09-02",
    "type": "income",
    "category": "Bán sỉ đại lý",
    "amount": 16500000,
    "payment": "Chuyển khoản (VietQR)",
    "note": "Giao sỉ đại lý Quán Chay An Lạc",
    "party": "Đại lý An Lạc"
  },
  {
    "id": "TXN-003",
    "date": "2026-09-02",
    "type": "expense",
    "category": "Nhập nguyên liệu / Giá vốn",
    "amount": 12400000,
    "payment": "Chuyển khoản (VietQR)",
    "note": "Nhập đậu nành hạt và nấm bào ngư tươi",
    "party": "NCC Nông sản Đồng Tháp"
  },
  {
    "id": "TXN-004",
    "date": "2026-09-05",
    "type": "expense",
    "category": "Điện & Kho lạnh",
    "amount": 3200000,
    "payment": "Chuyển khoản (VietQR)",
    "note": "Tiền điện kho cấp đông và tủ mát bảo quản",
    "party": "Điện Lực Cao Lãnh"
  },
  {
    "id": "TXN-005",
    "date": "2026-09-06",
    "type": "income",
    "category": "Bán lẻ tại quầy",
    "amount": 5400000,
    "payment": "Tiền mặt",
    "note": "Bán lẻ cuối tuần",
    "party": "Khách lẻ"
  },
  {
    "id": "TXN-006",
    "date": "2026-09-08",
    "type": "income",
    "category": "Bán online / Giao xa",
    "amount": 3900000,
    "payment": "Chuyển khoản (VietQR)",
    "note": "Đơn sỉ đóng thùng gửi xe đi Sài Gòn",
    "party": "Cửa hàng Chay Tâm Đức"
  },
  {
    "id": "TXN-007",
    "date": "2026-09-10",
    "type": "expense",
    "category": "Bao bì & Vật tư",
    "amount": 2500000,
    "payment": "Tiền mặt",
    "note": "Đặt in tem OCOP và hộp lon nhôm thực phẩm",
    "party": "Xưởng In Bao Bì"
  },
  {
    "id": "TXN-008",
    "date": "2026-09-10",
    "type": "expense",
    "category": "Lương nhân sự",
    "amount": 8000000,
    "payment": "Chuyển khoản (VietQR)",
    "note": "Ứng lương đầu tháng nhân viên quầy & kho",
    "party": "Nhân viên"
  },
  {
    "id": "TXN-009",
    "date": "2026-09-12",
    "type": "expense",
    "category": "Vận chuyển / Giao hàng",
    "amount": 650000,
    "payment": "Tiền mặt",
    "note": "Phí gửi chành xe tuyến Cao Lãnh - TP.HCM",
    "party": "Chành xe Tô Châu"
  },
  {
    "id": "TXN-010",
    "date": "2026-09-13",
    "type": "income",
    "category": "Bán lẻ tại quầy",
    "amount": 9200000,
    "payment": "Tiền mặt",
    "note": "Doanh thu ngày cận rằm tháng 8",
    "party": "Khách lẻ tại quầy"
  }
];

const DEFAULT_SETTINGS = {
  initialCash: 25000000,      // Tiền mặt số dư đầu kỳ (25 triệu)
  vatRate: 0.08,             // 8% VAT
  taxRate: 0.015,            // 1.5% Thuế khoán Hộ Kinh Doanh
  storageFeeRate: 0.01,      // 1% Phí điện lạnh & bảo quản mát/đông
  retailMargin: 0.30,        // 30% Biên bán lẻ tham khảo
  wholesaleMargin: 0.20      // 20% Biên bán sỉ tham khảo
};

// ================= APP STATE =================
class FinanceApp {
  constructor() {
    this.products = this.loadStorage("bl_products", SEED_PRODUCTS);
    this.transactions = this.loadStorage("bl_transactions", SEED_TRANSACTIONS);
    this.settings = this.loadStorage("bl_settings", DEFAULT_SETTINGS);

    this.currentTab = "overview";
    this.cashflowChart = null;
    this.expensePieChart = null;

    this.initEventListeners();
    this.renderAll();
  }

  loadStorage(key, defaultVal) {
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : defaultVal;
    } catch (e) {
      console.error("Storage error:", e);
      return defaultVal;
    }
  }

  saveStorage(key, val) {
    try {
      localStorage.setItem(key, JSON.stringify(val));
    } catch (e) {
      console.error("Error saving storage:", e);
    }
  }

  formatVND(num) {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
      maximumFractionDigits: 0
    }).format(num || 0);
  }

  formatNumber(num) {
    return new Intl.NumberFormat("vi-VN").format(Math.round(num || 0));
  }

  // ================= CALCULATION ENGINES =================
  calcProductCost(p) {
    const raw = Number(p.raw_price) || 0;
    const vatRate = this.settings.vatRate;
    const taxRate = this.settings.taxRate;
    const storageRate = this.settings.storageFeeRate;

    const vatPrice = Math.round(raw * (1 + vatRate));
    const taxPrice = Math.round(vatPrice * taxRate);
    const storageFee = Math.round(raw * storageRate);
    const costPrice = vatPrice + taxPrice + storageFee;

    const retailSuggested = Math.round(costPrice * (1 + this.settings.retailMargin));
    const wholesaleSuggested = Math.round(costPrice * (1 + this.settings.wholesaleMargin));

    const retailActual = Number(p.retail_actual) || retailSuggested;
    const wholesaleActual = Number(p.retail_actual ? (p.wholesale_suggested || wholesaleSuggested) : wholesaleSuggested);

    const retailProfit = retailActual - costPrice;
    const retailMarginPct = retailActual > 0 ? (retailProfit / retailActual) * 100 : 0;

    const wholesaleProfit = wholesaleActual - costPrice;
    const wholesaleMarginPct = wholesaleActual > 0 ? (wholesaleProfit / wholesaleActual) * 100 : 0;

    return {
      rawPrice: raw,
      vatPrice,
      taxPrice,
      storageFee,
      costPrice,
      retailSuggested,
      wholesaleSuggested,
      retailActual,
      wholesaleActual,
      retailProfit,
      retailMarginPct,
      wholesaleProfit,
      wholesaleMarginPct
    };
  }

  getSummaryMetrics() {
    const totalInflow = this.transactions
      .filter(t => t.type === "income")
      .reduce((sum, t) => sum + Number(t.amount || 0), 0);

    const totalOutflow = this.transactions
      .filter(t => t.type === "expense")
      .reduce((sum, t) => sum + Number(t.amount || 0), 0);

    const netCashFlow = totalInflow - totalOutflow;
    const currentCashBalance = this.settings.initialCash + netCashFlow;

    // Chi phí phân loại
    const cogsExpenses = this.transactions
      .filter(t => t.type === "expense" && t.category.includes("Giá vốn"))
      .reduce((sum, t) => sum + Number(t.amount || 0), 0);

    const opexExpenses = totalOutflow - cogsExpenses;

    const grossProfit = totalInflow - cogsExpenses;
    const grossMarginPct = totalInflow > 0 ? (grossProfit / totalInflow) * 100 : 0;
    const netProfit = totalInflow - totalOutflow;
    const netMarginPct = totalInflow > 0 ? (netProfit / totalInflow) * 100 : 0;

    // Tồn kho
    let totalStockQty = 0;
    let totalStockValueCost = 0;
    let totalStockValueRetail = 0;

    this.products.forEach(p => {
      const qty = Number(p.inventory_qty || 0);
      const calc = this.calcProductCost(p);
      totalStockQty += qty;
      totalStockValueCost += qty * calc.costPrice;
      totalStockValueRetail += qty * calc.retailActual;
    });

    // Break-even (Điểm hòa vốn)
    const breakEvenRevenue = grossMarginPct > 0 ? (opexExpenses / (grossMarginPct / 100)) : 0;

    // Cash Runway (Số ngày chi trả an toàn)
    const dailyBurnRate = opexExpenses / 30;
    const cashRunwayDays = dailyBurnRate > 0 ? Math.round(currentCashBalance / dailyBurnRate) : 999;

    return {
      totalInflow,
      totalOutflow,
      netCashFlow,
      currentCashBalance,
      cogsExpenses,
      opexExpenses,
      grossProfit,
      grossMarginPct,
      netProfit,
      netMarginPct,
      totalStockQty,
      totalStockValueCost,
      totalStockValueRetail,
      breakEvenRevenue,
      cashRunwayDays
    };
  }

  // ================= RENDER METHODS =================
  renderAll() {
    this.renderKPIs();
    this.renderCashflowTable();
    this.renderCOGSTable();
    this.renderInventoryTable();
    this.renderCharts();
  }

  renderKPIs() {
    const m = this.getSummaryMetrics();

    document.getElementById("kpiCurrentCash").textContent = this.formatVND(m.currentCashBalance);
    document.getElementById("kpiInflow").textContent = this.formatVND(m.totalInflow);
    document.getElementById("kpiOutflow").textContent = this.formatVND(m.totalOutflow);
    document.getElementById("kpiNetCash").textContent = this.formatVND(m.netCashFlow);
    document.getElementById("kpiNetProfit").textContent = this.formatVND(m.netProfit);
    document.getElementById("kpiGrossMargin").textContent = `${m.grossMarginPct.toFixed(1)}%`;
    document.getElementById("kpiStockValue").textContent = this.formatVND(m.totalStockValueCost);
    document.getElementById("kpiBreakEven").textContent = this.formatVND(m.breakEvenRevenue);

    // Cảnh báo trạng thái dòng tiền
    const statusEl = document.getElementById("cashHealthBadge");
    if (statusEl) {
      if (m.currentCashBalance < 5000000) {
        statusEl.className = "badge badge-margin-danger";
        statusEl.textContent = `⚠️ Báo động tiền mặt (${m.cashRunwayDays} ngày)`;
      } else if (m.cashRunwayDays < 20) {
        statusEl.className = "badge badge-margin-warning";
        statusEl.textContent = `Cần lưu ý (${m.cashRunwayDays} ngày an toàn)`;
      } else {
        statusEl.className = "badge badge-margin-good";
        statusEl.textContent = `Khỏe mạnh (${m.cashRunwayDays} ngày an toàn)`;
      }
    }
  }

  renderCashflowTable() {
    const tbody = document.getElementById("transactionsTableBody");
    if (!tbody) return;

    const filterType = document.getElementById("filterTxnType") ? document.getElementById("filterTxnType").value : "all";
    const searchQuery = document.getElementById("searchTxn") ? document.getElementById("searchTxn").value.toLowerCase() : "";

    let list = [...this.transactions].sort((a, b) => new Date(b.date) - new Date(a.date));

    if (filterType !== "all") {
      list = list.filter(t => t.type === filterType);
    }

    if (searchQuery) {
      list = list.filter(t => 
        (t.category && t.category.toLowerCase().includes(searchQuery)) ||
        (t.note && t.note.toLowerCase().includes(searchQuery)) ||
        (t.party && t.party.toLowerCase().includes(searchQuery))
      );
    }

    if (list.length === 0) {
      tbody.innerHTML = `<tr><td colspan="7" style="text-align: center; color: var(--text-muted); padding: 24px;">Không có giao dịch nào phù hợp</td></tr>`;
      return;
    }

    tbody.innerHTML = list.map(t => {
      const isIncome = t.type === "income";
      return `
        <tr>
          <td><strong style="color: var(--text-muted);">${t.date}</strong></td>
          <td>
            <span class="badge ${isIncome ? "badge-income" : "badge-expense"}">
              ${isIncome ? "⬇ Thu tiền" : "⬆ Chi tiền"}
            </span>
          </td>
          <td><strong>${t.category}</strong></td>
          <td style="font-weight: 700; color: ${isIncome ? "var(--success)" : "var(--danger)"};">
            ${isIncome ? "+" : "-"}${this.formatVND(t.amount)}
          </td>
          <td><span class="badge" style="background:#f1f5f9; color:#475569;">${t.payment || "Tiền mặt"}</span></td>
          <td>
            <div style="font-size: 12px; color: var(--text-main);">${t.note || "-"}</div>
            <div style="font-size: 11px; color: var(--text-muted);">${t.party ? "Đối tác: " + t.party : ""}</div>
          </td>
          <td style="text-align: right;">
            <button class="btn btn-secondary" style="padding: 4px 8px; font-size: 11px;" onclick="app.deleteTransaction('${t.id}')">Xóa</button>
          </td>
        </tr>
      `;
    }).join("");
  }

  renderCOGSTable() {
    const tbody = document.getElementById("cogsTableBody");
    if (!tbody) return;

    const catFilter = document.getElementById("filterCogsCat") ? document.getElementById("filterCogsCat").value : "all";
    const searchQuery = document.getElementById("searchCogs") ? document.getElementById("searchCogs").value.toLowerCase() : "";

    let list = this.products;

    if (catFilter !== "all") {
      list = list.filter(p => p.category === catFilter);
    }

    if (searchQuery) {
      list = list.filter(p => p.name.toLowerCase().includes(searchQuery));
    }

    tbody.innerHTML = list.map((p, index) => {
      const calc = this.calcProductCost(p);
      let badgeClass = "badge-lon";
      if (p.category.includes("ĐÔNG LẠNH")) badgeClass = "badge-donglanh";
      else if (p.category.includes("MÁT")) badgeClass = "badge-mat";
      else if (p.category.includes("KHÔ")) badgeClass = "badge-kho";

      let marginBadge = "badge-margin-good";
      if (calc.retailMarginPct < 15) marginBadge = "badge-margin-danger";
      else if (calc.retailMarginPct < 25) marginBadge = "badge-margin-warning";

      return `
        <tr>
          <td><span style="color: var(--text-muted); font-size: 11px;">#${index + 1}</span></td>
          <td>
            <strong>${p.name}</strong>
            <div style="font-size: 11px; color: var(--text-muted);">${p.weight || ""}</div>
          </td>
          <td><span class="badge ${badgeClass}">${p.category.replace("SẢN PHẨM ", "")}</span></td>
          <td><span class="badge" style="background: #f8fafc; border: 1px solid var(--border-color);">${p.unit}</span></td>
          <td>
            <input type="number" 
                   value="${p.raw_price || 0}" 
                   style="width: 95px; padding: 4px 6px; border: 1px solid var(--border-color); border-radius: 4px; font-size: 12px; font-weight: 600; text-align: right;"
                   onchange="app.updateProductPrice('${p.id}', this.value)">
          </td>
          <td style="color: var(--text-muted); font-size: 12px;">${this.formatNumber(calc.vatPrice)}</td>
          <td style="color: var(--text-muted); font-size: 12px;">${this.formatNumber(calc.taxPrice)}</td>
          <td style="font-weight: 700; color: var(--primary); font-size: 13px;">${this.formatVND(calc.costPrice)}</td>
          <td style="color: #0369a1; font-weight: 600;">${this.formatVND(calc.retailSuggested)}</td>
          <td>
            <strong style="color: var(--text-main);">${this.formatVND(calc.retailActual)}</strong>
          </td>
          <td style="color: #b45309; font-weight: 600;">${this.formatVND(calc.wholesaleSuggested)}</td>
          <td>
            <span class="badge ${marginBadge}">
              +${calc.retailMarginPct.toFixed(1)}% (${this.formatNumber(calc.retailProfit)} đ)
            </span>
          </td>
          <td style="text-align: right;">
            <button class="btn btn-secondary" style="padding: 4px 8px; font-size: 11px;" onclick="app.openEditProductModal('${p.id}')">Sửa</button>
          </td>
        </tr>
      `;
    }).join("");
  }

  renderInventoryTable() {
    const tbody = document.getElementById("inventoryTableBody");
    if (!tbody) return;

    let list = this.products;
    let totalItems = 0;
    let totalCostVal = 0;
    let totalRetailVal = 0;

    tbody.innerHTML = list.map((p, index) => {
      const calc = this.calcProductCost(p);
      const qty = Number(p.inventory_qty || 0);
      const subtotalCost = qty * calc.costPrice;
      const subtotalRetail = qty * calc.retailActual;

      totalItems += qty;
      totalCostVal += subtotalCost;
      totalRetailVal += subtotalRetail;

      return `
        <tr>
          <td><span style="color: var(--text-muted); font-size: 11px;">#${index + 1}</span></td>
          <td><strong>${p.name}</strong></td>
          <td>${p.category.replace("SẢN PHẨM ", "")}</td>
          <td>${p.unit}</td>
          <td>
            <input type="number" 
                   value="${qty}" 
                   style="width: 70px; padding: 4px 6px; border: 1px solid var(--border-color); border-radius: 4px; font-size: 12px; font-weight: 700; text-align: center;"
                   onchange="app.updateInventoryQty('${p.id}', this.value)">
          </td>
          <td>${this.formatVND(calc.costPrice)}</td>
          <td style="font-weight: 700; color: var(--accent-gold);">${this.formatVND(subtotalCost)}</td>
          <td>${this.formatVND(calc.retailActual)}</td>
          <td style="font-weight: 700; color: var(--success);">${this.formatVND(subtotalRetail)}</td>
        </tr>
      `;
    }).join("");

    if (document.getElementById("invTotalQty")) document.getElementById("invTotalQty").textContent = this.formatNumber(totalItems);
    if (document.getElementById("invTotalCost")) document.getElementById("invTotalCost").textContent = this.formatVND(totalCostVal);
    if (document.getElementById("invTotalRetail")) document.getElementById("invTotalRetail").textContent = this.formatVND(totalRetailVal);
    if (document.getElementById("invTotalProfit")) document.getElementById("invTotalProfit").textContent = this.formatVND(totalRetailVal - totalCostVal);
  }

  renderCharts() {
    if (typeof Chart === "undefined") return;

    // 1. Biểu đồ dòng tiền
    const cashCtx = document.getElementById("cashflowChart");
    if (cashCtx) {
      if (this.cashflowChart) this.cashflowChart.destroy();

      const dateMap = {};
      this.transactions.forEach(t => {
        if (!dateMap[t.date]) dateMap[t.date] = { income: 0, expense: 0 };
        if (t.type === "income") dateMap[t.date].income += Number(t.amount || 0);
        else dateMap[t.date].expense += Number(t.amount || 0);
      });

      const labels = Object.keys(dateMap).sort();
      const incomeData = labels.map(d => dateMap[d].income);
      const expenseData = labels.map(d => dateMap[d].expense);

      this.cashflowChart = new Chart(cashCtx, {
        type: "bar",
        data: {
          labels: labels.map(d => d.slice(5)), // MM-DD
          datasets: [
            {
              label: "Thu tiền vào (VND)",
              data: incomeData,
              backgroundColor: "#16a34a",
              borderRadius: 6
            },
            {
              label: "Chi tiền ra (VND)",
              data: expenseData,
              backgroundColor: "#dc2626",
              borderRadius: 6
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { position: "top" },
            tooltip: {
              callbacks: {
                label: (ctx) => `${ctx.dataset.label}: ${new Intl.NumberFormat("vi-VN").format(ctx.raw)} đ`
              }
            }
          },
          scales: {
            y: {
              ticks: {
                callback: (val) => `${val / 1000000} tr`
              }
            }
          }
        }
      });
    }

    // 2. Biểu đồ cơ cấu chi phí
    const pieCtx = document.getElementById("expensePieChart");
    if (pieCtx) {
      if (this.expensePieChart) this.expensePieChart.destroy();

      const catMap = {};
      this.transactions.filter(t => t.type === "expense").forEach(t => {
        catMap[t.category] = (catMap[t.category] || 0) + Number(t.amount || 0);
      });

      const pieLabels = Object.keys(catMap);
      const pieData = Object.values(catMap);

      this.expensePieChart = new Chart(pieCtx, {
        type: "doughnut",
        data: {
          labels: pieLabels,
          datasets: [{
            data: pieData,
            backgroundColor: [
              "#d97706", "#2563eb", "#d94680", "#16a34a", "#9333ea", "#0d9488", "#f43f5e"
            ]
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { position: "bottom" },
            tooltip: {
              callbacks: {
                label: (ctx) => `${ctx.label}: ${new Intl.NumberFormat("vi-VN").format(ctx.raw)} đ`
              }
            }
          }
        }
      });
    }
  }

  // ================= USER ACTIONS =================
  switchTab(tabId) {
    this.currentTab = tabId;
    document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
    document.querySelectorAll(".tab-pane").forEach(p => p.classList.remove("active"));

    const btn = document.querySelector(`[data-tab="${tabId}"]`);
    const pane = document.getElementById(tabId);
    if (btn) btn.classList.add("active");
    if (pane) pane.classList.add("active");

    if (tabId === "overview") {
      setTimeout(() => this.renderCharts(), 100);
    }
  }

  addTransaction(formData) {
    const newTxn = {
      id: "TXN-" + Date.now(),
      date: formData.date || new Date().toISOString().slice(0, 10),
      type: formData.type,
      category: formData.category,
      amount: Number(formData.amount) || 0,
      payment: formData.payment || "Tiền mặt",
      note: formData.note || "",
      party: formData.party || ""
    };

    this.transactions.unshift(newTxn);
    this.saveStorage("bl_transactions", this.transactions);
    this.renderAll();
    this.closeModal("modalAddTxn");
  }

  deleteTransaction(id) {
    if (!confirm("Bạn có chắc chắn muốn xóa giao dịch này?")) return;
    this.transactions = this.transactions.filter(t => t.id !== id);
    this.saveStorage("bl_transactions", this.transactions);
    this.renderAll();
  }

  updateProductPrice(id, newRawPrice) {
    const p = this.products.find(item => item.id === id);
    if (p) {
      p.raw_price = Number(newRawPrice) || 0;
      this.saveStorage("bl_products", this.products);
      this.renderAll();
    }
  }

  updateInventoryQty(id, newQty) {
    const p = this.products.find(item => item.id === id);
    if (p) {
      p.inventory_qty = Number(newQty) || 0;
      this.saveStorage("bl_products", this.products);
      this.renderAll();
    }
  }

  openEditProductModal(id) {
    const p = this.products.find(item => item.id === id);
    if (!p) return;

    document.getElementById("editProdId").value = p.id;
    document.getElementById("editProdName").value = p.name;
    document.getElementById("editProdCategory").value = p.category;
    document.getElementById("editProdWeight").value = p.weight || "";
    document.getElementById("editProdUnit").value = p.unit;
    document.getElementById("editProdRawPrice").value = p.raw_price;
    document.getElementById("editProdRetailActual").value = p.retail_actual || "";
    document.getElementById("editProdInventory").value = p.inventory_qty || 0;

    this.openModal("modalEditProduct");
  }

  saveEditProduct(formData) {
    const p = this.products.find(item => item.id === formData.id);
    if (p) {
      p.name = formData.name;
      p.category = formData.category;
      p.weight = formData.weight;
      p.unit = formData.unit;
      p.raw_price = Number(formData.raw_price) || 0;
      p.retail_actual = Number(formData.retail_actual) || 0;
      p.inventory_qty = Number(formData.inventory_qty) || 0;

      this.saveStorage("bl_products", this.products);
      this.renderAll();
      this.closeModal("modalEditProduct");
    }
  }

  addNewProduct(formData) {
    const newId = "BL-" + String(this.products.length + 1).padStart(3, "0");
    const newP = {
      id: newId,
      name: formData.name,
      category: formData.category,
      weight: formData.weight || "",
      unit: formData.unit || "Lon",
      raw_price: Number(formData.raw_price) || 0,
      retail_actual: Number(formData.retail_actual) || 0,
      inventory_qty: Number(formData.inventory_qty) || 0
    };

    this.products.push(newP);
    this.saveStorage("bl_products", this.products);
    this.renderAll();
    this.closeModal("modalAddProduct");
  }

  // ================= EXPORT & IMPORT =================
  exportExcelCSV(type) {
    let csv = "";
    if (type === "transactions") {
      csv = `\uFEFFMã GD,Ngày,Loại,Danh mục,Số tiền (VND),Hình thức,Ghi chú,Đối tác\n`;
      this.transactions.forEach(t => {
        csv += `"${t.id}","${t.date}","${t.type === "income" ? "Thu" : "Chi"}","${t.category}","${t.amount}","${t.payment}","${t.note || ""}","${t.party || ""}"\n`;
      });
      this.downloadFile("So_Thu_Chi_Binh_Loan.csv", csv);
    } else if (type === "cogs") {
      csv = `\uFEFFSTT,Mã,Tên sản phẩm,Nhóm,Quy cách,ĐVT,Giá nhập gốc,VAT 8%,Thuế 1.5%,Giá Cost,Giá lẻ TK (+30%),Giá lẻ niêm yết,Biên lợi nhuận (%)\n`;
      this.products.forEach((p, i) => {
        const c = this.calcProductCost(p);
        csv += `"${i + 1}","${p.id}","${p.name}","${p.category}","${p.weight || ""}","${p.unit}","${c.rawPrice}","${c.vatPrice}","${c.taxPrice}","${c.costPrice}","${c.retailSuggested}","${c.retailActual}","${c.retailMarginPct.toFixed(1)}%"\n`;
      });
      this.downloadFile("Bang_Gia_Von_Dinh_Gia_Binh_Loan.csv", csv);
    }
  }

  downloadFile(filename, content) {
    const blob = new Blob([content], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.setAttribute("download", filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  exportJSONBackup() {
    const backup = {
      exportedAt: new Date().toISOString(),
      settings: this.settings,
      products: this.products,
      transactions: this.transactions
    };
    const blob = new Blob([JSON.stringify(backup, null, 2)], { type: "application/json" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.setAttribute("download", `BinhLoanChay_Backup_${new Date().toISOString().slice(0, 10)}.json`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  importJSONBackup(file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const data = JSON.parse(e.target.result);
        if (data.products && data.transactions) {
          this.products = data.products;
          this.transactions = data.transactions;
          if (data.settings) this.settings = data.settings;

          this.saveStorage("bl_products", this.products);
          this.saveStorage("bl_transactions", this.transactions);
          this.saveStorage("bl_settings", this.settings);

          this.renderAll();
          alert("Khôi phục dữ liệu sao lưu thành công!");
        } else {
          alert("File sao lưu không đúng định dạng!");
        }
      } catch (err) {
        alert("Lỗi khi đọc file sao lưu: " + err.message);
      }
    };
    reader.readAsText(file);
  }

  resetToDefaults() {
    if (!confirm("Bạn có chắc chắn muốn đặt lại dữ liệu về mặc định ban đầu từ Google Sheet? Dữ liệu hiện tại sẽ bị ghi đè.")) return;
    this.products = JSON.parse(JSON.stringify(SEED_PRODUCTS));
    this.transactions = JSON.parse(JSON.stringify(SEED_TRANSACTIONS));
    this.settings = JSON.parse(JSON.stringify(DEFAULT_SETTINGS));

    this.saveStorage("bl_products", this.products);
    this.saveStorage("bl_transactions", this.transactions);
    this.saveStorage("bl_settings", this.settings);

    this.renderAll();
    alert("Đã phục hồi dữ liệu ban đầu thành công!");
  }

  // ================= MODAL HELPERS =================
  openModal(id) {
    const modal = document.getElementById(id);
    if (modal) modal.classList.add("active");
  }

  closeModal(id) {
    const modal = document.getElementById(id);
    if (modal) modal.classList.remove("active");
  }

  initEventListeners() {
    // Tab switching
    document.querySelectorAll(".tab-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        this.switchTab(btn.getAttribute("data-tab"));
      });
    });

    // Modal close buttons
    document.querySelectorAll(".modal-close, .btn-modal-close").forEach(btn => {
      btn.addEventListener("click", (e) => {
        const modal = e.target.closest(".modal-backdrop");
        if (modal) modal.classList.remove("active");
      });
    });

    // Transaction form submit
    const addTxnForm = document.getElementById("formAddTxn");
    if (addTxnForm) {
      addTxnForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const data = {
          date: document.getElementById("txnDate").value,
          type: document.getElementById("txnType").value,
          category: document.getElementById("txnCategory").value,
          amount: document.getElementById("txnAmount").value,
          payment: document.getElementById("txnPayment").value,
          note: document.getElementById("txnNote").value,
          party: document.getElementById("txnParty").value
        };
        this.addTransaction(data);
      });
    }

    // Edit Product form submit
    const editProdForm = document.getElementById("formEditProduct");
    if (editProdForm) {
      editProdForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const data = {
          id: document.getElementById("editProdId").value,
          name: document.getElementById("editProdName").value,
          category: document.getElementById("editProdCategory").value,
          weight: document.getElementById("editProdWeight").value,
          unit: document.getElementById("editProdUnit").value,
          raw_price: document.getElementById("editProdRawPrice").value,
          retail_actual: document.getElementById("editProdRetailActual").value,
          inventory_qty: document.getElementById("editProdInventory").value
        };
        this.saveEditProduct(data);
      });
    }

    // Add Product form submit
    const addProdForm = document.getElementById("formAddProduct");
    if (addProdForm) {
      addProdForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const data = {
          name: document.getElementById("addProdName").value,
          category: document.getElementById("addProdCategory").value,
          weight: document.getElementById("addProdWeight").value,
          unit: document.getElementById("addProdUnit").value,
          raw_price: document.getElementById("addProdRawPrice").value,
          retail_actual: document.getElementById("addProdRetailActual").value,
          inventory_qty: document.getElementById("addProdInventory").value
        };
        this.addNewProduct(data);
      });
    }

    // Quick filter change
    const filterTxnType = document.getElementById("filterTxnType");
    if (filterTxnType) filterTxnType.addEventListener("change", () => this.renderCashflowTable());

    const searchTxn = document.getElementById("searchTxn");
    if (searchTxn) searchTxn.addEventListener("input", () => this.renderCashflowTable());

    const filterCogsCat = document.getElementById("filterCogsCat");
    if (filterCogsCat) filterCogsCat.addEventListener("change", () => this.renderCOGSTable());

    const searchCogs = document.getElementById("searchCogs");
    if (searchCogs) searchCogs.addEventListener("input", () => this.renderCOGSTable());
  }
}

// Khởi chạy khi DOM sẵn sàng
document.addEventListener("DOMContentLoaded", () => {
  window.app = new FinanceApp();
});
