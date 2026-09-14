/**
 * BÌNH LOAN THỰC PHẨM CHAY — HỆ THỐNG QUẢN TRỊ TÀI CHÍNH, BÁN HÀNG & KHO (ERP MINI)
 * Bao gồm:
 * 1. Quản lý Đơn hàng bán lẻ / bán sỉ chi tiết theo món (POS)
 * 2. Báo cáo Xuất - Nhập - Tồn (X-N-T) & Phiếu kho
 * 3. Quản lý Khách hàng & Công nợ (CRM)
 * 4. Bảng tính Giá Vốn (COGS) & Cột Giá Sỉ Niêm Yết điều chỉnh
 * 5. Sổ quỹ Thu - Chi & Báo cáo Lãi Lỗ (P&L)
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
    "inventory_qty": 1.0,
    "wholesale_actual": 24000,
    "opening_qty": 1.0,
    "in_qty": 0,
    "out_qty": 0
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
    "inventory_qty": 1.0,
    "wholesale_actual": 0,
    "opening_qty": 1.0,
    "in_qty": 0,
    "out_qty": 0
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
    "inventory_qty": 1.0,
    "wholesale_actual": 24000,
    "opening_qty": 1.0,
    "in_qty": 0,
    "out_qty": 0
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
    "inventory_qty": 1.0,
    "wholesale_actual": 33000,
    "opening_qty": 1.0,
    "in_qty": 0,
    "out_qty": 0
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
    "inventory_qty": 1.0,
    "wholesale_actual": 24000,
    "opening_qty": 1.0,
    "in_qty": 0,
    "out_qty": 0
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
    "inventory_qty": 1.0,
    "wholesale_actual": 45000,
    "opening_qty": 1.0,
    "in_qty": 0,
    "out_qty": 0
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
    "inventory_qty": 1.0,
    "wholesale_actual": 33000,
    "opening_qty": 1.0,
    "in_qty": 0,
    "out_qty": 0
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
    "inventory_qty": 1.0,
    "wholesale_actual": 24000,
    "opening_qty": 1.0,
    "in_qty": 0,
    "out_qty": 0
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
    "inventory_qty": 1.0,
    "wholesale_actual": 24000,
    "opening_qty": 1.0,
    "in_qty": 0,
    "out_qty": 0
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
    "inventory_qty": 1.0,
    "wholesale_actual": 42000,
    "opening_qty": 1.0,
    "in_qty": 0,
    "out_qty": 0
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
    "inventory_qty": 1.0,
    "wholesale_actual": 79000,
    "opening_qty": 1.0,
    "in_qty": 0,
    "out_qty": 0
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
    "inventory_qty": 1.0,
    "wholesale_actual": 71000,
    "opening_qty": 1.0,
    "in_qty": 0,
    "out_qty": 0
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
    "inventory_qty": 1.0,
    "wholesale_actual": 37000,
    "opening_qty": 1.0,
    "in_qty": 0,
    "out_qty": 0
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
    "inventory_qty": 1.0,
    "wholesale_actual": 42000,
    "opening_qty": 1.0,
    "in_qty": 0,
    "out_qty": 0
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
    "inventory_qty": 1.0,
    "wholesale_actual": 45000,
    "opening_qty": 1.0,
    "in_qty": 0,
    "out_qty": 0
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
    "inventory_qty": 1.0,
    "wholesale_actual": 72000,
    "opening_qty": 1.0,
    "in_qty": 0,
    "out_qty": 0
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
    "inventory_qty": 1.0,
    "wholesale_actual": 41000,
    "opening_qty": 1.0,
    "in_qty": 0,
    "out_qty": 0
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
    "inventory_qty": 1.0,
    "wholesale_actual": 45000,
    "opening_qty": 1.0,
    "in_qty": 0,
    "out_qty": 0
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
    "inventory_qty": 1.0,
    "wholesale_actual": 72000,
    "opening_qty": 1.0,
    "in_qty": 0,
    "out_qty": 0
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
    "inventory_qty": 1.0,
    "wholesale_actual": 41000,
    "opening_qty": 1.0,
    "in_qty": 0,
    "out_qty": 0
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
    "inventory_qty": 1.0,
    "wholesale_actual": 53000,
    "opening_qty": 1.0,
    "in_qty": 0,
    "out_qty": 0
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
    "inventory_qty": 1.0,
    "wholesale_actual": 47000,
    "opening_qty": 1.0,
    "in_qty": 0,
    "out_qty": 0
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
    "inventory_qty": 1.0,
    "wholesale_actual": 33000,
    "opening_qty": 1.0,
    "in_qty": 0,
    "out_qty": 0
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
    "inventory_qty": 1.0,
    "wholesale_actual": 0,
    "opening_qty": 1.0,
    "in_qty": 0,
    "out_qty": 0
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
    "inventory_qty": 1.0,
    "wholesale_actual": 39000,
    "opening_qty": 1.0,
    "in_qty": 0,
    "out_qty": 0
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
    "inventory_qty": 1.0,
    "wholesale_actual": 39000,
    "opening_qty": 1.0,
    "in_qty": 0,
    "out_qty": 0
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
    "inventory_qty": 1.0,
    "wholesale_actual": 5000,
    "opening_qty": 1.0,
    "in_qty": 0,
    "out_qty": 0
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
    "inventory_qty": 1.0,
    "wholesale_actual": 6000,
    "opening_qty": 1.0,
    "in_qty": 0,
    "out_qty": 0
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
    "inventory_qty": 1.0,
    "wholesale_actual": 33000,
    "opening_qty": 1.0,
    "in_qty": 0,
    "out_qty": 0
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
    "inventory_qty": 1.0,
    "wholesale_actual": 132000,
    "opening_qty": 1.0,
    "in_qty": 0,
    "out_qty": 0
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
    "inventory_qty": 1.0,
    "wholesale_actual": 92000,
    "opening_qty": 1.0,
    "in_qty": 0,
    "out_qty": 0
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
    "inventory_qty": 1.0,
    "wholesale_actual": 46000,
    "opening_qty": 1.0,
    "in_qty": 0,
    "out_qty": 0
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
    "inventory_qty": 1.0,
    "wholesale_actual": 0,
    "opening_qty": 1.0,
    "in_qty": 0,
    "out_qty": 0
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
    "inventory_qty": 1.0,
    "wholesale_actual": 145000,
    "opening_qty": 1.0,
    "in_qty": 0,
    "out_qty": 0
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
    "inventory_qty": 1.0,
    "wholesale_actual": 92000,
    "opening_qty": 1.0,
    "in_qty": 0,
    "out_qty": 0
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
    "inventory_qty": 1.0,
    "wholesale_actual": 39000,
    "opening_qty": 1.0,
    "in_qty": 0,
    "out_qty": 0
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
    "inventory_qty": 1.0,
    "wholesale_actual": 0,
    "opening_qty": 1.0,
    "in_qty": 0,
    "out_qty": 0
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
    "inventory_qty": 1.0,
    "wholesale_actual": 151000,
    "opening_qty": 1.0,
    "in_qty": 0,
    "out_qty": 0
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
    "inventory_qty": 1.0,
    "wholesale_actual": 92000,
    "opening_qty": 1.0,
    "in_qty": 0,
    "out_qty": 0
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
    "inventory_qty": 1.0,
    "wholesale_actual": 39000,
    "opening_qty": 1.0,
    "in_qty": 0,
    "out_qty": 0
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
    "inventory_qty": 1.0,
    "wholesale_actual": 59000,
    "opening_qty": 1.0,
    "in_qty": 0,
    "out_qty": 0
  }
];
const SEED_CUSTOMERS = [
  {
    "id": "KH-001",
    "name": "Quán Cơm Chay An Lạc",
    "phone": "0918 123 456",
    "address": "Phường 1, TP. Cao Lãnh, Đồng Tháp",
    "type": "wholesale",
    "total_spent": 18720000,
    "current_debt": 0,
    "note": "Khách sỉ lớn, lấy hàng sáng thứ Hai & thứ Năm hàng tuần"
  },
  {
    "id": "KH-002",
    "name": "Cửa Hàng Thực Phẩm Chay Tâm Đức",
    "phone": "0903 987 654",
    "address": "Quận 5, TP. Hồ Chí Minh",
    "type": "wholesale",
    "total_spent": 24500000,
    "current_debt": 1810000,
    "note": "Đại lý phân phối TP.HCM, gửi chành xe Tô Châu"
  },
  {
    "id": "KH-003",
    "name": "Bếp Ăn Từ Thiện Chùa Phước Hưng",
    "phone": "0939 555 666",
    "address": "TP. Sa Đéc, Đồng Tháp",
    "type": "temple",
    "total_spent": 12000000,
    "current_debt": 0,
    "note": "Bếp ăn chay từ thiện, ưu tiên giá sỉ hỗ trợ"
  },
  {
    "id": "KH-004",
    "name": "Khách Lẻ Mua Tại Quầy",
    "phone": "0277 385 2026",
    "address": "Tại cửa hàng Cao Lãnh",
    "type": "retail",
    "total_spent": 8500000,
    "current_debt": 0,
    "note": "Khách vãng lai và khách quen khu vực Cao Lãnh"
  }
];
const SEED_ORDERS = [
  {
    "id": "DH-001",
    "code": "DH-20260910-01",
    "date": "2026-09-10",
    "customer_id": "KH-001",
    "customer_name": "Quán Cơm Chay An Lạc",
    "order_type": "wholesale",
    "items": [
      {
        "product_id": "BL-001",
        "product_name": "Cơm gạo lức hạt sen 200g",
        "unit": "Lon",
        "qty": 30,
        "price": 24000,
        "cost": 19732,
        "subtotal": 720000,
        "subtotal_cost": 591960,
        "profit": 128040
      },
      {
        "product_id": "BL-011",
        "product_name": "Chả chay lá chuối",
        "unit": "Đòn",
        "qty": 10,
        "price": 79000,
        "cost": 65772,
        "subtotal": 790000,
        "subtotal_cost": 657720,
        "profit": 132280
      },
      {
        "product_id": "BL-012",
        "product_name": "Chả chay lớn 500g",
        "unit": "Đòn",
        "qty": 10,
        "price": 71000,
        "cost": 59195,
        "subtotal": 710000,
        "subtotal_cost": 591950,
        "profit": 118050
      }
    ],
    "total_amount": 2220000,
    "total_cost": 1841630,
    "gross_profit": 378370,
    "discount": 0,
    "final_amount": 2220000,
    "paid_amount": 2220000,
    "debt_amount": 0,
    "payment_method": "Chuyển khoản (VietQR)",
    "status": "completed",
    "note": "Giao sáng sớm cho quán mở bán"
  },
  {
    "id": "DH-002",
    "code": "DH-20260912-02",
    "date": "2026-09-12",
    "customer_id": "KH-002",
    "customer_name": "Cửa Hàng Thực Phẩm Chay Tâm Đức",
    "order_type": "wholesale",
    "items": [
      {
        "product_id": "BL-004",
        "product_name": "Tàu hủ ky cuộn rong biển sốt cà 200g",
        "unit": "Lon",
        "qty": 50,
        "price": 33000,
        "cost": 27405,
        "subtotal": 1650000,
        "subtotal_cost": 1370250,
        "profit": 279750
      },
      {
        "product_id": "BL-014",
        "product_name": "Phù trúc cuộn",
        "unit": "Vỉ",
        "qty": 20,
        "price": 42000,
        "cost": 35078,
        "subtotal": 840000,
        "subtotal_cost": 701560,
        "profit": 138440
      },
      {
        "product_id": "BL-030",
        "product_name": "Khô lưỡi trâu vụn loại 1",
        "unit": "Kg",
        "qty": 10,
        "price": 132000,
        "cost": 109620,
        "subtotal": 1320000,
        "subtotal_cost": 1096200,
        "profit": 223800
      }
    ],
    "total_amount": 3810000,
    "total_cost": 3168010,
    "gross_profit": 641990,
    "discount": 0,
    "final_amount": 3810000,
    "paid_amount": 2000000,
    "debt_amount": 1810000,
    "payment_method": "Chuyển khoản (VietQR)",
    "status": "partial",
    "note": "Gửi xe Tô Châu, chuyển cọc 2tr, hẹn trả nợ đợt hàng sau"
  },
  {
    "id": "DH-003",
    "code": "DH-20260914-03",
    "date": "2026-09-14",
    "customer_id": "KH-004",
    "customer_name": "Khách Lẻ Mua Tại Quầy",
    "order_type": "retail",
    "items": [
      {
        "product_id": "BL-003",
        "product_name": "Chả hộp chay 200g",
        "unit": "Lon",
        "qty": 2,
        "price": 30000,
        "cost": 19732,
        "subtotal": 60000,
        "subtotal_cost": 39464,
        "profit": 20536
      },
      {
        "product_id": "BL-010",
        "product_name": "Cơm gạo lứt THK Nấm bào ngư",
        "unit": "Khay",
        "qty": 1,
        "price": 45000,
        "cost": 35078,
        "subtotal": 45000,
        "subtotal_cost": 35078,
        "profit": 9922
      },
      {
        "product_id": "BL-027",
        "product_name": "Đậu hủ trắng",
        "unit": "Miếng",
        "qty": 5,
        "price": 6000,
        "cost": 4385,
        "subtotal": 30000,
        "subtotal_cost": 21925,
        "profit": 8075
      }
    ],
    "total_amount": 135000,
    "total_cost": 96467,
    "gross_profit": 38533,
    "discount": 0,
    "final_amount": 135000,
    "paid_amount": 135000,
    "debt_amount": 0,
    "payment_method": "Tiền mặt",
    "status": "completed",
    "note": "Khách ăn chay ngày rằm mua tại chỗ"
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
  },
  {
    "id": "TXN-011",
    "date": "2026-09-14",
    "type": "income",
    "category": "Bán lẻ tại quầy",
    "amount": 135000,
    "payment": "Tiền mặt",
    "note": "Thu tiền đơn bán lẻ DH-20260914-03",
    "party": "Khách Lẻ Mua Tại Quầy"
  }
];
const SEED_MOVEMENTS = [
  {
    "id": "MOV-001",
    "date": "2026-09-01",
    "type": "in",
    "product_id": "BL-001",
    "product_name": "Cơm gạo lức hạt sen 200g",
    "qty": 100,
    "unit": "Lon",
    "unit_cost": 19732,
    "total_cost": 1973200,
    "note": "Nhập hàng sản xuất từ xưởng",
    "ref": "PX-XUONG-01"
  },
  {
    "id": "MOV-002",
    "date": "2026-09-10",
    "type": "out_sale",
    "product_id": "BL-001",
    "product_name": "Cơm gạo lức hạt sen 200g",
    "qty": 30,
    "unit": "Lon",
    "unit_cost": 19732,
    "total_cost": 591960,
    "note": "Xuất bán đơn hàng DH-20260910-01",
    "ref": "DH-20260910-01"
  },
  {
    "id": "MOV-003",
    "date": "2026-09-11",
    "type": "out_waste",
    "product_id": "BL-027",
    "product_name": "Đậu hủ trắng",
    "qty": 4,
    "unit": "Miếng",
    "unit_cost": 4385,
    "total_cost": 17540,
    "note": "Hao hụt hàng mát cuối ngày",
    "ref": "HH-20260911"
  }
];

const DEFAULT_SETTINGS = {
  initialCash: 25000000,
  vatRate: 0.08,
  taxRate: 0.015,
  storageFeeRate: 0.01,
  retailMargin: 0.30,
  wholesaleMargin: 0.20
};

class FinanceApp {
  constructor() {
    this.products = this.loadStorage("bl_products_v2", SEED_PRODUCTS);
    this.customers = this.loadStorage("bl_customers_v2", SEED_CUSTOMERS);
    this.orders = this.loadStorage("bl_orders_v2", SEED_ORDERS);
    this.transactions = this.loadStorage("bl_transactions_v2", SEED_TRANSACTIONS);
    this.stockMovements = this.loadStorage("bl_movements_v2", SEED_MOVEMENTS);
    this.settings = this.loadStorage("bl_settings_v2", DEFAULT_SETTINGS);

    this.currentTab = "overview";
    this.posCart = []; // Giỏ hàng đang tạo đơn
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

  // ================= 1. ENGINE TÍNH GIÁ VỐN (COGS) =================
  calcProductCost(p) {
    const raw = Number(p.raw_price) || 0;
    const vatPrice = Math.round(raw * (1 + this.settings.vatRate));
    const taxPrice = Math.round(vatPrice * this.settings.taxRate);
    const storageFee = Math.round(raw * this.settings.storageFeeRate);
    const costPrice = vatPrice + taxPrice + storageFee;

    const retailSuggested = Math.round(costPrice * (1 + this.settings.retailMargin));
    const wholesaleSuggested = Math.round(costPrice * (1 + this.settings.wholesaleMargin));

    const retailActual = Number(p.retail_actual) || (retailSuggested > 0 ? retailSuggested : 0);
    const wholesaleActual = Number(p.wholesale_actual) || (wholesaleSuggested > 0 ? wholesaleSuggested : 0);

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

  // ================= 2. TỔNG HỢP SỐ LIỆU TÀI CHÍNH =================
  getSummaryMetrics() {
    const totalInflow = this.transactions
      .filter(t => t.type === "income")
      .reduce((sum, t) => sum + Number(t.amount || 0), 0);

    const totalOutflow = this.transactions
      .filter(t => t.type === "expense")
      .reduce((sum, t) => sum + Number(t.amount || 0), 0);

    const netCashFlow = totalInflow - totalOutflow;
    const currentCashBalance = this.settings.initialCash + netCashFlow;

    const cogsExpenses = this.transactions
      .filter(t => t.type === "expense" && (t.category.includes("Giá vốn") || t.category.includes("nguyên liệu")))
      .reduce((sum, t) => sum + Number(t.amount || 0), 0);

    const opexExpenses = totalOutflow - cogsExpenses;
    const grossProfit = totalInflow - cogsExpenses;
    const grossMarginPct = totalInflow > 0 ? (grossProfit / totalInflow) * 100 : 0;
    const netProfit = totalInflow - totalOutflow;

    // Tổng giá trị kho
    let totalStockQty = 0;
    let totalStockValueCost = 0;
    this.products.forEach(p => {
      const qty = Number(p.inventory_qty || 0);
      const c = this.calcProductCost(p);
      totalStockQty += qty;
      totalStockValueCost += qty * c.costPrice;
    });

    // Tổng công nợ khách hàng
    const totalCustomerDebt = this.customers.reduce((sum, c) => sum + Number(c.current_debt || 0), 0);

    // Điểm hòa vốn
    const breakEvenRevenue = grossMarginPct > 0 ? (opexExpenses / (grossMarginPct / 100)) : 0;
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
      totalStockQty,
      totalStockValueCost,
      totalCustomerDebt,
      breakEvenRevenue,
      cashRunwayDays
    };
  }

  // ================= 3. RENDER TỔNG THỂ =================
  renderAll() {
    this.renderKPIs();
    this.renderOrdersTable();
    this.renderInventoryXNTTable();
    this.renderCOGSTable();
    this.renderCustomersTable();
    this.renderCashflowTable();
    this.renderCharts();
    this.populateSelectOptions();
  }

  renderKPIs() {
    const m = this.getSummaryMetrics();
    const el = id => document.getElementById(id);

    if (el("kpiCurrentCash")) el("kpiCurrentCash").textContent = this.formatVND(m.currentCashBalance);
    if (el("kpiInflow")) el("kpiInflow").textContent = this.formatVND(m.totalInflow);
    if (el("kpiOutflow")) el("kpiOutflow").textContent = this.formatVND(m.totalOutflow);
    if (el("kpiNetCash")) el("kpiNetCash").textContent = this.formatVND(m.netCashFlow);
    if (el("kpiNetProfit")) el("kpiNetProfit").textContent = this.formatVND(m.netProfit);
    if (el("kpiGrossMargin")) el("kpiGrossMargin").textContent = `${m.grossMarginPct.toFixed(1)}%`;
    if (el("kpiStockValue")) el("kpiStockValue").textContent = this.formatVND(m.totalStockValueCost);
    if (el("kpiTotalDebt")) el("kpiTotalDebt").textContent = this.formatVND(m.totalCustomerDebt);
    if (el("kpiBreakEven")) el("kpiBreakEven").textContent = this.formatVND(m.breakEvenRevenue);

    const statusEl = el("cashHealthBadge");
    if (statusEl) {
      if (m.currentCashBalance < 5000000) {
        statusEl.className = "badge badge-margin-danger";
        statusEl.textContent = `⚠️ Báo động tiền mặt (${m.cashRunwayDays} ngày)`;
      } else if (m.cashRunwayDays < 20) {
        statusEl.className = "badge badge-margin-warning";
        statusEl.textContent = `Lưu ý (${m.cashRunwayDays} ngày)`;
      } else {
        statusEl.className = "badge badge-margin-good";
        statusEl.textContent = `Khỏe mạnh (${m.cashRunwayDays} ngày an toàn)`;
      }
    }
  }

  populateSelectOptions() {
    // Dropdown chọn khách hàng trong form tạo đơn
    const custSelect = document.getElementById("orderCustomerId");
    if (custSelect) {
      custSelect.innerHTML = `<option value="">-- Chọn khách hàng / đại lý --</option>` +
        this.customers.map(c => `<option value="${c.id}">${c.name} (${c.phone || "Không SĐT"})</option>`).join("");
    }

    // Dropdown chọn sản phẩm trong giỏ POS
    const prodSelect = document.getElementById("posAddProductId");
    if (prodSelect) {
      prodSelect.innerHTML = `<option value="">-- Chọn sản phẩm chay --</option>` +
        this.products.map(p => {
          const c = this.calcProductCost(p);
          return `<option value="${p.id}" data-unit="${p.unit}" data-retail="${c.retailActual}" data-wholesale="${c.wholesaleActual}" data-cost="${c.costPrice}">
            ${p.name} [Tồn: ${p.inventory_qty || 0} ${p.unit}] - Lẻ: ${this.formatNumber(c.retailActual)}đ | Sỉ: ${this.formatNumber(c.wholesaleActual)}đ
          </option>`;
        }).join("");
    }

    // Dropdown chọn sản phẩm nhập kho
    const stockInSelect = document.getElementById("stockInProductId");
    if (stockInSelect) {
      stockInSelect.innerHTML = `<option value="">-- Chọn sản phẩm cần nhập --</option>` +
        this.products.map(p => `<option value="${p.id}" data-cost="${p.raw_price || 0}">${p.name} (${p.unit})</option>`).join("");
    }
  }

  // ================= 4. TAB ĐƠN HÀNG (POS & BÁN HÀNG CHI TIẾT) =================
  renderOrdersTable() {
    const tbody = document.getElementById("ordersTableBody");
    if (!tbody) return;

    const search = document.getElementById("searchOrder") ? document.getElementById("searchOrder").value.toLowerCase() : "";
    let list = [...this.orders].sort((a, b) => new Date(b.date) - new Date(a.date));

    if (search) {
      list = list.filter(o =>
        o.code.toLowerCase().includes(search) ||
        o.customer_name.toLowerCase().includes(search) ||
        (o.note && o.note.toLowerCase().includes(search))
      );
    }

    if (list.length === 0) {
      tbody.innerHTML = `<tr><td colspan="9" style="text-align: center; color: var(--text-muted); padding: 24px;">Chưa có đơn hàng nào</td></tr>`;
      return;
    }

    tbody.innerHTML = list.map((o, idx) => {
      const isWholesale = o.order_type === "wholesale";
      const isPaid = o.debt_amount === 0;
      const itemsCount = o.items ? o.items.reduce((sum, item) => sum + Number(item.qty || 0), 0) : 0;

      return `
        <tr>
          <td><strong style="color: var(--primary); font-size: 11.5px;">${o.code}</strong></td>
          <td style="color: var(--text-muted); font-size: 11.5px;">${o.date}</td>
          <td>
            <strong>${o.customer_name}</strong>
            <div style="font-size: 11px; color: var(--text-muted);">${o.payment_method || "Tiền mặt"}</div>
          </td>
          <td>
            <span class="badge ${isWholesale ? "badge-donglanh" : "badge-lon"}">
              ${isWholesale ? "Bán Sỉ" : "Bán Lẻ"}
            </span>
          </td>
          <td style="text-align: center;">
            <span class="badge" style="background:#f1f5f9; color:#334155;">${o.items ? o.items.length : 0} món (${itemsCount} cái)</span>
          </td>
          <td style="font-weight: 700; color: var(--text-main);">
            ${this.formatVND(o.final_amount)}
          </td>
          <td style="color: var(--success); font-weight: 600;">
            +${this.formatVND(o.gross_profit || 0)}
          </td>
          <td>
            <span class="badge ${isPaid ? "badge-margin-good" : "badge-margin-danger"}">
              ${isPaid ? "Đã thanh toán" : `Còn nợ ${this.formatVND(o.debt_amount)}`}
            </span>
          </td>
          <td style="text-align: right; white-space: nowrap;">
            <button class="btn btn-secondary" style="padding: 3px 8px; font-size: 11px;" onclick="app.viewOrderDetails('${o.id}')">👁 Xem / In</button>
            <button class="btn btn-secondary" style="padding: 3px 8px; font-size: 11px; color: var(--danger);" onclick="app.deleteOrder('${o.id}')">Xóa</button>
          </td>
        </tr>
      `;
    }).join("");
  }

  initPosCart() {
    this.posCart = [];
    this.renderPosCart();
  }

  addToPosCart(productId, qty) {
    if (!productId) {
      alert("Vui lòng chọn sản phẩm!");
      return;
    }
    qty = Number(qty) || 1;
    const p = this.products.find(item => item.id === productId);
    if (!p) return;

    const calc = this.calcProductCost(p);
    const orderType = document.getElementById("orderType") ? document.getElementById("orderType").value : "retail";
    const unitPrice = orderType === "wholesale" ? calc.wholesaleActual : calc.retailActual;

    const existingIndex = this.posCart.findIndex(item => item.product_id === productId);
    if (existingIndex >= 0) {
      this.posCart[existingIndex].qty += qty;
      this.posCart[existingIndex].subtotal = this.posCart[existingIndex].qty * this.posCart[existingIndex].price;
      this.posCart[existingIndex].subtotal_cost = this.posCart[existingIndex].qty * this.posCart[existingIndex].cost;
      this.posCart[existingIndex].profit = this.posCart[existingIndex].subtotal - this.posCart[existingIndex].subtotal_cost;
    } else {
      this.posCart.push({
        product_id: p.id,
        product_name: p.name,
        unit: p.unit,
        qty: qty,
        price: unitPrice,
        cost: calc.costPrice,
        subtotal: qty * unitPrice,
        subtotal_cost: qty * calc.costPrice,
        profit: (qty * unitPrice) - (qty * calc.costPrice)
      });
    }

    this.renderPosCart();
  }

  removePosCartItem(index) {
    this.posCart.splice(index, 1);
    this.renderPosCart();
  }

  updatePosCartItemQty(index, newQty) {
    newQty = Number(newQty) || 1;
    if (this.posCart[index]) {
      this.posCart[index].qty = newQty;
      this.posCart[index].subtotal = newQty * this.posCart[index].price;
      this.posCart[index].subtotal_cost = newQty * this.posCart[index].cost;
      this.posCart[index].profit = this.posCart[index].subtotal - this.posCart[index].subtotal_cost;
      this.renderPosCart();
    }
  }

  renderPosCart() {
    const tbody = document.getElementById("posCartTableBody");
    if (!tbody) return;

    if (this.posCart.length === 0) {
      tbody.innerHTML = `<tr><td colspan="6" style="text-align: center; color: var(--text-muted); padding: 18px;">Chưa chọn món nào vào đơn hàng</td></tr>`;
      this.updatePosSummary();
      return;
    }

    tbody.innerHTML = this.posCart.map((item, idx) => `
      <tr>
        <td><strong>${item.product_name}</strong></td>
        <td>${item.unit}</td>
        <td>
          <input type="number" value="${item.qty}" min="1" 
                 style="width: 60px; padding: 2px 4px; text-align: center; border: 1px solid var(--border-color); border-radius: 4px;"
                 onchange="app.updatePosCartItemQty(${idx}, this.value)">
        </td>
        <td>${this.formatNumber(item.price)} đ</td>
        <td style="font-weight: 700; color: var(--primary);">${this.formatVND(item.subtotal)}</td>
        <td style="text-align: right;">
          <button type="button" class="btn btn-secondary" style="padding: 2px 6px; font-size: 10px;" onclick="app.removePosCartItem(${idx})">✕</button>
        </td>
      </tr>
    `).join("");

    this.updatePosSummary();
  }

  updatePosSummary() {
    const totalAmount = this.posCart.reduce((sum, item) => sum + item.subtotal, 0);
    const totalCost = this.posCart.reduce((sum, item) => sum + item.subtotal_cost, 0);
    const discount = Number(document.getElementById("orderDiscount") ? document.getElementById("orderDiscount").value : 0) || 0;
    const finalAmount = Math.max(0, totalAmount - discount);

    const paidInput = document.getElementById("orderPaidAmount");
    if (paidInput && (!paidInput.value || paidInput.dataset.touched !== "true")) {
      paidInput.value = finalAmount;
    }
    const paidAmount = Number(paidInput ? paidInput.value : finalAmount) || 0;
    const debtAmount = Math.max(0, finalAmount - paidAmount);

    const el = id => document.getElementById(id);
    if (el("posTotalAmount")) el("posTotalAmount").textContent = this.formatVND(totalAmount);
    if (el("posTotalCost")) el("posTotalCost").textContent = this.formatVND(totalCost);
    if (el("posGrossProfit")) el("posGrossProfit").textContent = this.formatVND(finalAmount - totalCost);
    if (el("posFinalAmount")) el("posFinalAmount").textContent = this.formatVND(finalAmount);
    if (el("posDebtAmount")) el("posDebtAmount").textContent = this.formatVND(debtAmount);
  }

  saveNewOrder() {
    if (this.posCart.length === 0) {
      alert("Đơn hàng chưa có sản phẩm nào!");
      return;
    }

    const customerId = document.getElementById("orderCustomerId").value;
    const customer = this.customers.find(c => c.id === customerId);
    const customerName = customer ? customer.name : (document.getElementById("orderCustomerCustom").value || "Khách lẻ tại quầy");
    const orderType = document.getElementById("orderType").value;
    const paymentMethod = document.getElementById("orderPaymentMethod").value;
    const note = document.getElementById("orderNote").value;
    const discount = Number(document.getElementById("orderDiscount").value) || 0;
    const orderDate = document.getElementById("orderDate").value || new Date().toISOString().slice(0, 10);

    const totalAmount = this.posCart.reduce((sum, item) => sum + item.subtotal, 0);
    const totalCost = this.posCart.reduce((sum, item) => sum + item.subtotal_cost, 0);
    const finalAmount = Math.max(0, totalAmount - discount);
    const paidAmount = Number(document.getElementById("orderPaidAmount").value) || 0;
    const debtAmount = Math.max(0, finalAmount - paidAmount);

    const code = "DH-" + orderDate.replace(/-/g, "") + "-" + String(this.orders.length + 1).padStart(2, "0");
    const newOrder = {
      id: "DH-" + Date.now(),
      code,
      date: orderDate,
      customer_id: customerId || "KH-004",
      customer_name: customerName,
      order_type: orderType,
      items: JSON.parse(JSON.stringify(this.posCart)),
      total_amount: totalAmount,
      total_cost: totalCost,
      gross_profit: finalAmount - totalCost,
      discount,
      final_amount: finalAmount,
      paid_amount: paidAmount,
      debt_amount: debtAmount,
      payment_method: paymentMethod,
      status: debtAmount === 0 ? "completed" : "partial",
      note
    };

    // 1. Trừ kho sản phẩm và tạo phiếu xuất kho
    newOrder.items.forEach(item => {
      const p = this.products.find(prod => prod.id === item.product_id);
      if (p) {
        p.inventory_qty = Math.max(0, Number(p.inventory_qty || 0) - item.qty);
        p.out_qty = Number(p.out_qty || 0) + item.qty;

        this.stockMovements.unshift({
          id: "MOV-" + Date.now() + "-" + Math.random().toString(36).substr(2, 4),
          date: orderDate,
          type: "out_sale",
          product_id: p.id,
          product_name: p.name,
          qty: item.qty,
          unit: p.unit,
          unit_cost: item.cost,
          total_cost: item.subtotal_cost,
          note: `Xuất bán đơn hàng ${code}`,
          ref: code
        });
      }
    });

    // 2. Ghi nhận tiền thu vào Sổ Thu Chi (nếu có khách thanh toán)
    if (paidAmount > 0) {
      this.transactions.unshift({
        id: "TXN-" + Date.now(),
        date: orderDate,
        type: "income",
        category: orderType === "wholesale" ? "Bán sỉ đại lý" : "Bán lẻ tại quầy",
        amount: paidAmount,
        payment: paymentMethod,
        note: `Thu tiền đơn hàng ${code} (${customerName})`,
        party: customerName
      });
    }

    // 3. Cập nhật khách hàng (tổng tiền mua và công nợ)
    if (customer) {
      customer.total_spent = Number(customer.total_spent || 0) + finalAmount;
      customer.current_debt = Number(customer.current_debt || 0) + debtAmount;
    }

    this.orders.unshift(newOrder);

    this.saveStorage("bl_orders_v2", this.orders);
    this.saveStorage("bl_products_v2", this.products);
    this.saveStorage("bl_transactions_v2", this.transactions);
    this.saveStorage("bl_movements_v2", this.stockMovements);
    this.saveStorage("bl_customers_v2", this.customers);

    this.renderAll();
    this.closeModal("modalCreateOrder");
    this.viewOrderDetails(newOrder.id);
  }

  deleteOrder(orderId) {
    const o = this.orders.find(item => item.id === orderId);
    if (!o) return;
    if (!confirm(`Bạn có chắc chắn muốn xóa đơn hàng ${o.code}? Hệ thống sẽ hoàn lại số lượng tồn kho và điều chỉnh công nợ khách hàng.`)) return;

    // Hoàn lại kho
    if (o.items) {
      o.items.forEach(item => {
        const p = this.products.find(prod => prod.id === item.product_id);
        if (p) {
          p.inventory_qty = Number(p.inventory_qty || 0) + item.qty;
          p.out_qty = Math.max(0, Number(p.out_qty || 0) - item.qty);
        }
      });
    }

    // Xóa phiếu xuất kho liên quan
    this.stockMovements = this.stockMovements.filter(m => m.ref !== o.code);

    // Xóa giao dịch thu tiền liên quan
    this.transactions = this.transactions.filter(t => !t.note.includes(o.code));

    // Hoàn lại công nợ khách hàng
    const cust = this.customers.find(c => c.id === o.customer_id);
    if (cust) {
      cust.total_spent = Math.max(0, Number(cust.total_spent || 0) - o.final_amount);
      cust.current_debt = Math.max(0, Number(cust.current_debt || 0) - o.debt_amount);
    }

    this.orders = this.orders.filter(item => item.id !== orderId);

    this.saveStorage("bl_orders_v2", this.orders);
    this.saveStorage("bl_products_v2", this.products);
    this.saveStorage("bl_transactions_v2", this.transactions);
    this.saveStorage("bl_movements_v2", this.stockMovements);
    this.saveStorage("bl_customers_v2", this.customers);

    this.renderAll();
  }

  viewOrderDetails(orderId) {
    const o = this.orders.find(item => item.id === orderId);
    if (!o) return;

    const el = id => document.getElementById(id);
    el("invReceiptCode").textContent = o.code;
    el("invReceiptDate").textContent = o.date;
    el("invReceiptCustomer").textContent = o.customer_name;
    el("invReceiptType").textContent = o.order_type === "wholesale" ? "Đơn Bán Sỉ" : "Đơn Bán Lẻ";
    el("invReceiptPayment").textContent = o.payment_method || "Tiền mặt";

    const tbody = el("invReceiptItemsBody");
    tbody.innerHTML = (o.items || []).map((item, idx) => `
      <tr>
        <td>${idx + 1}</td>
        <td><strong>${item.product_name}</strong></td>
        <td>${item.unit}</td>
        <td style="text-align: center;">${item.qty}</td>
        <td style="text-align: right;">${this.formatNumber(item.price)} đ</td>
        <td style="text-align: right; font-weight: 700;">${this.formatNumber(item.subtotal)} đ</td>
      </tr>
    `).join("");

    el("invReceiptTotal").textContent = this.formatVND(o.total_amount);
    el("invReceiptDiscount").textContent = o.discount ? `-${this.formatVND(o.discount)}` : "0 ₫";
    el("invReceiptFinal").textContent = this.formatVND(o.final_amount);
    el("invReceiptPaid").textContent = this.formatVND(o.paid_amount);
    el("invReceiptDebt").textContent = this.formatVND(o.debt_amount);

    this.openModal("modalViewOrder");
  }

  // ================= 5. TAB XUẤT - NHẬP - TỒN (X-N-T) =================
  renderInventoryXNTTable() {
    const tbody = document.getElementById("xntTableBody");
    if (!tbody) return;

    const catFilter = document.getElementById("filterXntCat") ? document.getElementById("filterXntCat").value : "all";
    const search = document.getElementById("searchXnt") ? document.getElementById("searchXnt").value.toLowerCase() : "";

    let list = this.products;
    if (catFilter !== "all") list = list.filter(p => p.category === catFilter);
    if (search) list = list.filter(p => p.name.toLowerCase().includes(search));

    let totalOpening = 0;
    let totalIn = 0;
    let totalOut = 0;
    let totalClosing = 0;
    let totalValue = 0;

    tbody.innerHTML = list.map((p, idx) => {
      const calc = this.calcProductCost(p);
      const opening = Number(p.opening_qty || p.inventory_qty || 0);
      const inQty = Number(p.in_qty || 0);
      const outQty = Number(p.out_qty || 0);
      const closing = Number(p.inventory_qty || 0);
      const stockVal = closing * calc.costPrice;

      totalOpening += opening;
      totalIn += inQty;
      totalOut += outQty;
      totalClosing += closing;
      totalValue += stockVal;

      return `
        <tr>
          <td><span style="color: var(--text-muted); font-size: 11px;">#${idx + 1}</span></td>
          <td><strong>${p.name}</strong></td>
          <td><span class="badge" style="background:#f1f5f9; color:#475569;">${p.category.replace("SẢN PHẨM ", "")}</span></td>
          <td>${p.unit}</td>
          <td style="text-align: center; color: var(--text-muted);">${opening}</td>
          <td style="text-align: center; color: var(--success); font-weight: 600;">+${inQty}</td>
          <td style="text-align: center; color: var(--danger); font-weight: 600;">-${outQty}</td>
          <td style="text-align: center; font-weight: 700; font-size: 13px; color: var(--primary);">${closing}</td>
          <td style="font-size: 12px; color: var(--text-muted);">${this.formatNumber(calc.costPrice)} đ</td>
          <td style="font-weight: 700; color: var(--accent-gold);">${this.formatVND(stockVal)}</td>
        </tr>
      `;
    }).join("");

    const el = id => document.getElementById(id);
    if (el("xntTotalOpening")) el("xntTotalOpening").textContent = this.formatNumber(totalOpening);
    if (el("xntTotalIn")) el("xntTotalIn").textContent = `+${this.formatNumber(totalIn)}`;
    if (el("xntTotalOut")) el("xntTotalOut").textContent = `-${this.formatNumber(totalOut)}`;
    if (el("xntTotalClosing")) el("xntTotalClosing").textContent = this.formatNumber(totalClosing);
    if (el("xntTotalStockVal")) el("xntTotalStockVal").textContent = this.formatVND(totalValue);
  }

  saveStockIn(formData) {
    const p = this.products.find(prod => prod.id === formData.product_id);
    if (!p) return;

    const qty = Number(formData.qty) || 0;
    const unitPrice = Number(formData.price) || p.raw_price || 0;
    const totalCost = qty * unitPrice;
    const date = formData.date || new Date().toISOString().slice(0, 10);

    p.inventory_qty = Number(p.inventory_qty || 0) + qty;
    p.in_qty = Number(p.in_qty || 0) + qty;

    this.stockMovements.unshift({
      id: "MOV-" + Date.now(),
      date,
      type: "in",
      product_id: p.id,
      product_name: p.name,
      qty,
      unit: p.unit,
      unit_cost: unitPrice,
      total_cost: totalCost,
      note: formData.note || "Nhập hàng vào kho",
      ref: formData.ref || "PNK-" + Date.now().toString().slice(-4)
    });

    if (formData.create_expense) {
      this.transactions.unshift({
        id: "TXN-" + Date.now(),
        date,
        type: "expense",
        category: "Nhập nguyên liệu / Giá vốn",
        amount: totalCost,
        payment: formData.payment || "Chuyển khoản (VietQR)",
        note: `Nhập ${qty} ${p.unit} ${p.name}`,
        party: formData.supplier || "Xưởng Bình Loan"
      });
    }

    this.saveStorage("bl_products_v2", this.products);
    this.saveStorage("bl_movements_v2", this.stockMovements);
    this.saveStorage("bl_transactions_v2", this.transactions);

    this.renderAll();
    this.closeModal("modalStockIn");
  }

  // ================= 6. TAB BẢNG GIÁ VỐN & GIÁ SỈ NIÊM YẾT =================
  renderCOGSTable() {
    const tbody = document.getElementById("cogsTableBody");
    if (!tbody) return;

    const catFilter = document.getElementById("filterCogsCat") ? document.getElementById("filterCogsCat").value : "all";
    const search = document.getElementById("searchCogs") ? document.getElementById("searchCogs").value.toLowerCase() : "";

    let list = this.products;
    if (catFilter !== "all") list = list.filter(p => p.category === catFilter);
    if (search) list = list.filter(p => p.name.toLowerCase().includes(search));

    tbody.innerHTML = list.map((p, index) => {
      const calc = this.calcProductCost(p);

      let retailBadge = "badge-margin-good";
      if (calc.retailMarginPct < 15) retailBadge = "badge-margin-danger";
      else if (calc.retailMarginPct < 25) retailBadge = "badge-margin-warning";

      let wholesaleBadge = "badge-margin-good";
      if (calc.wholesaleMarginPct < 8) wholesaleBadge = "badge-margin-danger";
      else if (calc.wholesaleMarginPct < 15) wholesaleBadge = "badge-margin-warning";

      return `
        <tr>
          <td><span style="color: var(--text-muted); font-size: 11px;">#${index + 1}</span></td>
          <td>
            <strong>${p.name}</strong>
            <div style="font-size: 11px; color: var(--text-muted);">${p.weight || ""}</div>
          </td>
          <td>${p.unit}</td>
          <td>
            <input type="number" 
                   value="${p.raw_price || 0}" 
                   style="width: 85px; padding: 3px 5px; border: 1px solid var(--border-color); border-radius: 4px; font-size: 11.5px; text-align: right; font-weight: 600;"
                   onchange="app.updateProductPrice('${p.id}', this.value)">
          </td>
          <td style="font-weight: 700; color: var(--primary); font-size: 12.5px;">${this.formatNumber(calc.costPrice)} đ</td>
          
          <!-- Giá Bán Lẻ -->
          <td style="color: #0369a1; font-size: 11.5px;">${this.formatNumber(calc.retailSuggested)} đ</td>
          <td>
            <input type="number" 
                   value="${p.retail_actual || 0}" 
                   style="width: 90px; padding: 3px 5px; border: 1px solid #93c5fd; border-radius: 4px; font-size: 12px; font-weight: 700; text-align: right; color: #1e3a8a;"
                   onchange="app.updateRetailActual('${p.id}', this.value)">
          </td>
          <td>
            <span class="badge ${retailBadge}" style="font-size: 10px;">
              +${calc.retailMarginPct.toFixed(1)}% (${this.formatNumber(calc.retailProfit)} đ)
            </span>
          </td>

          <!-- Giá Bán Sỉ -->
          <td style="color: #b45309; font-size: 11.5px;">${this.formatNumber(calc.wholesaleSuggested)} đ</td>
          <td>
            <input type="number" 
                   value="${p.wholesale_actual || 0}" 
                   style="width: 90px; padding: 3px 5px; border: 1px solid #fde047; border-radius: 4px; font-size: 12px; font-weight: 700; text-align: right; color: #78350f;"
                   onchange="app.updateWholesaleActual('${p.id}', this.value)">
          </td>
          <td>
            <span class="badge ${wholesaleBadge}" style="font-size: 10px;">
              +${calc.wholesaleMarginPct.toFixed(1)}% (${this.formatNumber(calc.wholesaleProfit)} đ)
            </span>
          </td>
        </tr>
      `;
    }).join("");
  }

  updateProductPrice(id, val) {
    const p = this.products.find(item => item.id === id);
    if (p) {
      p.raw_price = Number(val) || 0;
      this.saveStorage("bl_products_v2", this.products);
      this.renderAll();
    }
  }

  updateRetailActual(id, val) {
    const p = this.products.find(item => item.id === id);
    if (p) {
      p.retail_actual = Number(val) || 0;
      this.saveStorage("bl_products_v2", this.products);
      this.renderAll();
    }
  }

  updateWholesaleActual(id, val) {
    const p = this.products.find(item => item.id === id);
    if (p) {
      p.wholesale_actual = Number(val) || 0;
      this.saveStorage("bl_products_v2", this.products);
      this.renderAll();
    }
  }

  // ================= 7. TAB KHÁCH HÀNG & CÔNG NỢ =================
  renderCustomersTable() {
    const tbody = document.getElementById("customersTableBody");
    if (!tbody) return;

    const search = document.getElementById("searchCustomer") ? document.getElementById("searchCustomer").value.toLowerCase() : "";
    let list = this.customers;

    if (search) {
      list = list.filter(c =>
        c.name.toLowerCase().includes(search) ||
        (c.phone && c.phone.includes(search)) ||
        (c.address && c.address.toLowerCase().includes(search))
      );
    }

    tbody.innerHTML = list.map((c, idx) => {
      const hasDebt = Number(c.current_debt || 0) > 0;
      return `
        <tr>
          <td><strong style="color: var(--text-muted); font-size: 11.5px;">${c.id}</strong></td>
          <td>
            <strong>${c.name}</strong>
            <div style="font-size: 11px; color: var(--text-muted);">${c.note || ""}</div>
          </td>
          <td>${c.phone || "-"}</td>
          <td style="font-size: 12px; color: var(--text-muted);">${c.address || "-"}</td>
          <td>
            <span class="badge" style="background:#f1f5f9; color:#334155;">
              ${c.type === "wholesale" ? "Đại lý sỉ" : (c.type === "temple" ? "Chùa / Bếp chay" : "Khách lẻ")}
            </span>
          </td>
          <td style="font-weight: 700; color: var(--primary);">${this.formatVND(c.total_spent)}</td>
          <td>
            <span class="badge ${hasDebt ? "badge-margin-danger" : "badge-margin-good"}" style="font-size: 11.5px; padding: 4px 8px;">
              ${hasDebt ? this.formatVND(c.current_debt) : "0 ₫ (Đã xong)"}
            </span>
          </td>
          <td style="text-align: right; white-space: nowrap;">
            ${hasDebt ? `<button class="btn btn-success" style="padding: 3px 8px; font-size: 11px;" onclick="app.openDebtPaymentModal('${c.id}')">💵 Thu Nợ</button>` : ""}
            <button class="btn btn-secondary" style="padding: 3px 8px; font-size: 11px;" onclick="app.editCustomer('${c.id}')">Sửa</button>
          </td>
        </tr>
      `;
    }).join("");
  }

  saveCustomer(formData) {
    if (formData.id) {
      const c = this.customers.find(item => item.id === formData.id);
      if (c) {
        c.name = formData.name;
        c.phone = formData.phone;
        c.address = formData.address;
        c.type = formData.type;
        c.note = formData.note;
      }
    } else {
      const newId = "KH-" + String(this.customers.length + 1).padStart(3, "0");
      this.customers.push({
        id: newId,
        name: formData.name,
        phone: formData.phone,
        address: formData.address,
        type: formData.type || "wholesale",
        total_spent: 0,
        current_debt: 0,
        note: formData.note || ""
      });
    }

    this.saveStorage("bl_customers_v2", this.customers);
    this.renderAll();
    this.closeModal("modalAddCustomer");
  }

  openDebtPaymentModal(customerId) {
    const c = this.customers.find(item => item.id === customerId);
    if (!c) return;

    document.getElementById("debtCustId").value = c.id;
    document.getElementById("debtCustName").textContent = c.name;
    document.getElementById("debtCustCurrent").textContent = this.formatVND(c.current_debt);
    document.getElementById("debtPayAmount").value = c.current_debt;
    document.getElementById("debtPayAmount").max = c.current_debt;

    this.openModal("modalPayDebt");
  }

  payCustomerDebt(customerId, amount, paymentMethod) {
    const c = this.customers.find(item => item.id === customerId);
    if (!c) return;
    amount = Number(amount) || 0;
    if (amount <= 0) return;

    c.current_debt = Math.max(0, Number(c.current_debt || 0) - amount);

    this.transactions.unshift({
      id: "TXN-" + Date.now(),
      date: new Date().toISOString().slice(0, 10),
      type: "income",
      category: "Thu hồi nợ khách hàng",
      amount,
      payment: paymentMethod || "Chuyển khoản (VietQR)",
      note: `Thu nợ tiền hàng từ ${c.name}`,
      party: c.name
    });

    this.saveStorage("bl_customers_v2", this.customers);
    this.saveStorage("bl_transactions_v2", this.transactions);

    this.renderAll();
    this.closeModal("modalPayDebt");
  }

  // ================= 8. TAB SỔ THU CHI & P&L =================
  renderCashflowTable() {
    const tbody = document.getElementById("transactionsTableBody");
    if (!tbody) return;

    const filterType = document.getElementById("filterTxnType") ? document.getElementById("filterTxnType").value : "all";
    const search = document.getElementById("searchTxn") ? document.getElementById("searchTxn").value.toLowerCase() : "";

    let list = [...this.transactions].sort((a, b) => new Date(b.date) - new Date(a.date));

    if (filterType !== "all") list = list.filter(t => t.type === filterType);
    if (search) {
      list = list.filter(t =>
        (t.category && t.category.toLowerCase().includes(search)) ||
        (t.note && t.note.toLowerCase().includes(search)) ||
        (t.party && t.party.toLowerCase().includes(search))
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
          <td><strong style="color: var(--text-muted); font-size: 11.5px;">${t.date}</strong></td>
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
            <button class="btn btn-secondary" style="padding: 3px 8px; font-size: 11px;" onclick="app.deleteTransaction('${t.id}')">Xóa</button>
          </td>
        </tr>
      `;
    }).join("");
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
    this.saveStorage("bl_transactions_v2", this.transactions);
    this.renderAll();
    this.closeModal("modalAddTxn");
  }

  deleteTransaction(id) {
    if (!confirm("Bạn có chắc chắn muốn xóa giao dịch này?")) return;
    this.transactions = this.transactions.filter(t => t.id !== id);
    this.saveStorage("bl_transactions_v2", this.transactions);
    this.renderAll();
  }

  // ================= 9. BIỂU ĐỒ CHART.JS =================
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
          labels: labels.map(d => d.slice(5)),
          datasets: [
            {
              label: "Thu vào (VND)",
              data: incomeData,
              backgroundColor: "#16a34a",
              borderRadius: 6
            },
            {
              label: "Chi ra (VND)",
              data: expenseData,
              backgroundColor: "#dc2626",
              borderRadius: 6
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              ticks: { callback: val => `${val / 1000000} tr` }
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

      this.expensePieChart = new Chart(pieCtx, {
        type: "doughnut",
        data: {
          labels: Object.keys(catMap),
          datasets: [{
            data: Object.values(catMap),
            backgroundColor: [
              "#d97706", "#2563eb", "#d94680", "#16a34a", "#9333ea", "#0d9488", "#f43f5e"
            ]
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { position: "bottom" } }
        }
      });
    }
  }

  // ================= 10. TIỆN ÍCH XUẤT CSV =================
  exportExcelCSV(type) {
    let csv = "";
    if (type === "transactions") {
      csv = `﻿Mã GD,Ngày,Loại,Danh mục,Số tiền (VND),Hình thức,Ghi chú,Đối tác
`;
      this.transactions.forEach(t => {
        csv += `"${t.id}","${t.date}","${t.type === "income" ? "Thu" : "Chi"}","${t.category}","${t.amount}","${t.payment}","${t.note || ""}","${t.party || ""}"
`;
      });
      this.downloadFile("So_Thu_Chi_Binh_Loan.csv", csv);
    } else if (type === "orders") {
      csv = `﻿Mã Đơn,Ngày,Khách Hàng,Loại Đơn,Tổng Tiền,Tiền Vốn,Lãi Gộp,Đã Thanh Toán,Còn Nợ,Hình Thức,Chi Tiết Món
`;
      this.orders.forEach(o => {
        const itemDesc = (o.items || []).map(i => `${i.product_name} (${i.qty} ${i.unit})`).join("; ");
        csv += `"${o.code}","${o.date}","${o.customer_name}","${o.order_type}","${o.final_amount}","${o.total_cost}","${o.gross_profit}","${o.paid_amount}","${o.debt_amount}","${o.payment_method}","${itemDesc}"
`;
      });
      this.downloadFile("Danh_Sach_Don_Hang_Binh_Loan.csv", csv);
    } else if (type === "xnt") {
      csv = `﻿Mã SP,Tên Sản Phẩm,Nhóm,ĐVT,Tồn Đầu Kỳ,Nhập Trong Kỳ,Xuất Trong Kỳ,Tồn Cuối Kỳ,Giá Cost,Tổng Vốn Tồn Kho (VND)
`;
      this.products.forEach(p => {
        const c = this.calcProductCost(p);
        const closing = Number(p.inventory_qty || 0);
        csv += `"${p.id}","${p.name}","${p.category}","${p.unit}","${p.opening_qty || 0}","${p.in_qty || 0}","${p.out_qty || 0}","${closing}","${c.costPrice}","${closing * c.costPrice}"
`;
      });
      this.downloadFile("Bao_Cao_Xuat_Nhap_Ton_Binh_Loan.csv", csv);
    } else if (type === "customers") {
      csv = `﻿Mã KH,Tên Khách Hàng / Đại Lý,Số Điện Thoại,Địa Chỉ,Phân Loại,Tổng Doanh Số Mua (VND),Công Nợ Hiện Tại (VND),Ghi Chú
`;
      this.customers.forEach(c => {
        csv += `"${c.id}","${c.name}","${c.phone || ""}","${c.address || ""}","${c.type}","${c.total_spent}","${c.current_debt}","${c.note || ""}"
`;
      });
      this.downloadFile("Danh_Ba_Khach_Hang_Cong_No.csv", csv);
    } else if (type === "cogs") {
      csv = `﻿STT,Mã,Tên Sản Phẩm,Nhóm,ĐVT,Đơn Giá Gốc,Giá Cost,Giá Lẻ Niêm Yết,Biên Lãi Lẻ (%),Giá Sỉ Niêm Yết,Biên Lãi Sỉ (%)
`;
      this.products.forEach((p, i) => {
        const c = this.calcProductCost(p);
        csv += `"${i + 1}","${p.id}","${p.name}","${p.category}","${p.unit}","${c.rawPrice}","${c.costPrice}","${c.retailActual}","${c.retailMarginPct.toFixed(1)}%","${c.wholesaleActual}","${c.wholesaleMarginPct.toFixed(1)}%"
`;
      });
      this.downloadFile("Bang_Gia_Von_Gia_Si_Binh_Loan.csv", csv);
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
      customers: this.customers,
      orders: this.orders,
      transactions: this.transactions,
      stockMovements: this.stockMovements
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
        if (data.products && data.orders && data.transactions) {
          this.products = data.products;
          this.orders = data.orders;
          this.transactions = data.transactions;
          if (data.customers) this.customers = data.customers;
          if (data.stockMovements) this.stockMovements = data.stockMovements;
          if (data.settings) this.settings = data.settings;

          this.saveStorage("bl_products_v2", this.products);
          this.saveStorage("bl_orders_v2", this.orders);
          this.saveStorage("bl_customers_v2", this.customers);
          this.saveStorage("bl_transactions_v2", this.transactions);
          this.saveStorage("bl_movements_v2", this.stockMovements);

          this.renderAll();
          alert("Khôi phục bản sao lưu thành công!");
        } else {
          alert("File sao lưu không đúng cấu trúc!");
        }
      } catch (err) {
        alert("Lỗi đọc file: " + err.message);
      }
    };
    reader.readAsText(file);
  }

  resetToDefaults() {
    if (!confirm("Khôi phục lại toàn bộ dữ liệu mẫu ban đầu từ Google Sheet? Dữ liệu hiện tại sẽ được thay thế.")) return;
    this.products = JSON.parse(JSON.stringify(SEED_PRODUCTS));
    this.customers = JSON.parse(JSON.stringify(SEED_CUSTOMERS));
    this.orders = JSON.parse(JSON.stringify(SEED_ORDERS));
    this.transactions = JSON.parse(JSON.stringify(SEED_TRANSACTIONS));
    this.stockMovements = JSON.parse(JSON.stringify(SEED_MOVEMENTS));
    this.settings = JSON.parse(JSON.stringify(DEFAULT_SETTINGS));

    this.saveStorage("bl_products_v2", this.products);
    this.saveStorage("bl_customers_v2", this.customers);
    this.saveStorage("bl_orders_v2", this.orders);
    this.saveStorage("bl_transactions_v2", this.transactions);
    this.saveStorage("bl_movements_v2", this.stockMovements);

    this.renderAll();
    alert("Đã phục hồi dữ liệu gốc thành công!");
  }

  // ================= 11. NAVIGATION & MODALS =================
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

  openModal(id) {
    const m = document.getElementById(id);
    if (m) m.classList.add("active");
  }

  addNewProduct(formData) {
    const rawPrice = Number(formData.raw_price) || 0;
    const cat = formData.category || "SẢN PHẨM ĐÔNG LẠNH";
    const initialQty = Number(formData.inventory_qty) || 0;

    // Tự động sinh mã sản phẩm BL-xxx
    const nextNum = this.products.length + 1;
    const newId = "BL-" + String(nextNum).padStart(3, "0");

    // Tính giá cost tự động
    const vatPrice = Math.round(rawPrice * (1 + this.settings.vatRate));
    const tax = Math.round(vatPrice * this.settings.taxRate);
    const storageFee = Math.round(rawPrice * this.settings.storageFeeRate);
    const costPrice = vatPrice + tax + storageFee;
    const retailSug = Math.round(costPrice * (1 + this.settings.retailMargin));
    const wholesaleSug = Math.round(costPrice * (1 + this.settings.wholesaleMargin));

    const retailActual = Number(formData.retail_actual) || (retailSug > 0 ? retailSug : 0);
    const wholesaleActual = Number(formData.wholesale_actual) || (wholesaleSug > 0 ? wholesaleSug : 0);

    const newProd = {
      id: newId,
      category: cat,
      name: formData.name,
      weight: formData.weight || "",
      unit: formData.unit || "Gói",
      raw_price: rawPrice,
      vat_price: vatPrice,
      tax: tax,
      cost_price: costPrice,
      retail_suggested: retailSug,
      retail_actual: retailActual,
      wholesale_suggested: wholesaleSug,
      wholesale_actual: wholesaleActual,
      inventory_qty: initialQty,
      opening_qty: initialQty,
      in_qty: 0,
      out_qty: 0
    };

    this.products.push(newProd);
    this.saveStorage("bl_products_v2", this.products);
    this.renderAll();
    this.closeModal("modalAddProduct");

    // Tự động chọn món vừa thêm trong giỏ POS nếu đang mở
    const posSelect = document.getElementById("posAddProductId");
    if (posSelect) posSelect.value = newId;

    const stockSelect = document.getElementById("stockInProductId");
    if (stockSelect) stockSelect.value = newId;

    alert(`Đã thêm món chay "${formData.name}" (Mã: ${newId}) vào danh mục thành công!`);
  }

  closeModal(id) {
    const m = document.getElementById(id);
    if (m) m.classList.remove("active");
  }

  initEventListeners() {
    document.querySelectorAll(".tab-btn").forEach(btn => {
      btn.addEventListener("click", () => this.switchTab(btn.getAttribute("data-tab")));
    });

    document.querySelectorAll(".modal-close, .btn-modal-close").forEach(btn => {
      btn.addEventListener("click", e => {
        const m = e.target.closest(".modal-backdrop");
        if (m) m.classList.remove("active");
      });
    });

    // Form Add Product
    const formAddProd = document.getElementById("formAddProduct");
    if (formAddProd) {
      formAddProd.addEventListener("submit", e => {
        e.preventDefault();
        this.addNewProduct({
          name: document.getElementById("addProdName").value,
          category: document.getElementById("addProdCategory").value,
          weight: document.getElementById("addProdWeight").value,
          unit: document.getElementById("addProdUnit").value,
          raw_price: document.getElementById("addProdRawPrice").value,
          retail_actual: document.getElementById("addProdRetailActual").value,
          wholesale_actual: document.getElementById("addProdWholesaleActual").value,
          inventory_qty: document.getElementById("addProdInventory").value
        });
        formAddProd.reset();
      });
    }

    // Toggle notice khi chọn danh mục Thu Chi
    const txnCatSelect = document.getElementById("txnCategory");
    const txnTypeSelect = document.getElementById("txnType");
    const txnPosNotice = document.getElementById("txnPosNotice");
    const updateNotice = () => {
      if (txnPosNotice && txnTypeSelect && txnCatSelect) {
        const isSales = txnTypeSelect.value === "income" && (txnCatSelect.value.includes("Bán lẻ") || txnCatSelect.value.includes("Bán sỉ"));
        txnPosNotice.style.display = isSales ? "flex" : "none";
      }
    };
    if (txnCatSelect) txnCatSelect.addEventListener("change", updateNotice);
    if (txnTypeSelect) txnTypeSelect.addEventListener("change", updateNotice);
    updateNotice();

    // Form Add Transaction
    const addTxnForm = document.getElementById("formAddTxn");
    if (addTxnForm) {
      addTxnForm.addEventListener("submit", e => {
        e.preventDefault();
        this.addTransaction({
          date: document.getElementById("txnDate").value,
          type: document.getElementById("txnType").value,
          category: document.getElementById("txnCategory").value,
          amount: document.getElementById("txnAmount").value,
          payment: document.getElementById("txnPayment").value,
          note: document.getElementById("txnNote").value,
          party: document.getElementById("txnParty").value
        });
      });
    }

    // Form Add Stock In
    const formStockIn = document.getElementById("formStockIn");
    if (formStockIn) {
      formStockIn.addEventListener("submit", e => {
        e.preventDefault();
        this.saveStockIn({
          product_id: document.getElementById("stockInProductId").value,
          qty: document.getElementById("stockInQty").value,
          price: document.getElementById("stockInPrice").value,
          date: document.getElementById("stockInDate").value,
          supplier: document.getElementById("stockInSupplier").value,
          note: document.getElementById("stockInNote").value,
          create_expense: document.getElementById("stockInCreateExpense").checked,
          payment: document.getElementById("stockInPayment").value
        });
      });
    }

    // Form Add Customer
    const formCust = document.getElementById("formAddCustomer");
    if (formCust) {
      formCust.addEventListener("submit", e => {
        e.preventDefault();
        this.saveCustomer({
          id: document.getElementById("custEditId").value,
          name: document.getElementById("custName").value,
          phone: document.getElementById("custPhone").value,
          address: document.getElementById("custAddress").value,
          type: document.getElementById("custType").value,
          note: document.getElementById("custNote").value
        });
      });
    }

    // Form Pay Debt
    const formPayDebt = document.getElementById("formPayDebt");
    if (formPayDebt) {
      formPayDebt.addEventListener("submit", e => {
        e.preventDefault();
        this.payCustomerDebt(
          document.getElementById("debtCustId").value,
          document.getElementById("debtPayAmount").value,
          document.getElementById("debtPaymentMethod").value
        );
      });
    }

    // POS Cart Events
    const btnAddToCart = document.getElementById("btnPosAddToCart");
    if (btnAddToCart) {
      btnAddToCart.addEventListener("click", () => {
        const prodId = document.getElementById("posAddProductId").value;
        const qty = document.getElementById("posAddQty").value;
        this.addToPosCart(prodId, qty);
      });
    }

    const orderTypeSelect = document.getElementById("orderType");
    if (orderTypeSelect) {
      orderTypeSelect.addEventListener("change", () => {
        // Tự động cập nhật lại đơn giá món trong giỏ theo sỉ/lẻ
        const type = orderTypeSelect.value;
        this.posCart.forEach(item => {
          const p = this.products.find(prod => prod.id === item.product_id);
          if (p) {
            const calc = this.calcProductCost(p);
            item.price = type === "wholesale" ? calc.wholesaleActual : calc.retailActual;
            item.subtotal = item.qty * item.price;
            item.profit = item.subtotal - item.subtotal_cost;
          }
        });
        this.renderPosCart();
      });
    }

    const orderDiscount = document.getElementById("orderDiscount");
    if (orderDiscount) orderDiscount.addEventListener("input", () => this.updatePosSummary());

    const orderPaidAmount = document.getElementById("orderPaidAmount");
    if (orderPaidAmount) {
      orderPaidAmount.addEventListener("input", () => {
        orderPaidAmount.dataset.touched = "true";
        this.updatePosSummary();
      });
    }

    const btnSubmitOrder = document.getElementById("btnSubmitOrder");
    if (btnSubmitOrder) btnSubmitOrder.addEventListener("click", () => this.saveNewOrder());

    // Filter listeners
    const elBind = (id, event, fn) => {
      const el = document.getElementById(id);
      if (el) el.addEventListener(event, fn);
    };

    elBind("searchOrder", "input", () => this.renderOrdersTable());
    elBind("searchXnt", "input", () => this.renderInventoryXNTTable());
    elBind("filterXntCat", "change", () => this.renderInventoryXNTTable());
    elBind("searchCogs", "input", () => this.renderCOGSTable());
    elBind("filterCogsCat", "change", () => this.renderCOGSTable());
    elBind("searchCustomer", "input", () => this.renderCustomersTable());
    elBind("searchTxn", "input", () => this.renderCashflowTable());
    elBind("filterTxnType", "change", () => this.renderCashflowTable());
  }
}

document.addEventListener("DOMContentLoaded", () => {
  window.app = new FinanceApp();
});
