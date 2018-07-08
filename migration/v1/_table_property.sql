
-- --------------------------------------------------------

--
-- Table structure for table `property`
--

DROP TABLE IF EXISTS `property`;
CREATE TABLE `property` (
  `property_id` varchar(20) NOT NULL,
  `property_name` varchar(45) DEFAULT NULL,
  `property_type` int(11) DEFAULT NULL,
  `property_status` int(11) DEFAULT NULL,
  `property_package` int(11) DEFAULT NULL,
  `property_design` int(11) DEFAULT NULL,
  `property_proximity` varchar(45) DEFAULT NULL,
  `property_life_support` varchar(45) DEFAULT NULL,
  `property_service` varchar(45) DEFAULT NULL,
  `area_id` varchar(20) DEFAULT NULL,
  `employee_id` varchar(20) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `temp_column` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `property`
--

INSERT INTO `property` (`property_id`, `property_name`, `property_type`, `property_status`, `property_package`, `property_design`, `property_proximity`, `property_life_support`, `property_service`, `area_id`, `employee_id`, `created_at`, `updated_at`, `deleted_at`, `temp_column`) VALUES
('P0000', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'A0000', 'E0000', '2018-07-02 17:25:28', NULL, NULL, NULL),
('P0001', '808 Residence', 3, 1, NULL, NULL, NULL, NULL, NULL, 'A0003', 'E0011', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0002', 'Adi Bali Homestay', 4, 1, NULL, NULL, NULL, NULL, NULL, 'A0013', 'E0010', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0003', 'Agung Homestay', 4, 1, NULL, NULL, NULL, NULL, NULL, 'A0003', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0004', 'Armaya Homestay', 4, 0, NULL, NULL, NULL, NULL, NULL, 'A0002', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0005', 'Asri Guest House', 4, 1, NULL, NULL, NULL, NULL, NULL, 'A0003', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0006', 'Avisara Guesthouse', 4, 0, NULL, NULL, NULL, NULL, NULL, 'A0012', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0007', 'Ayu Laba', 4, 1, NULL, NULL, NULL, NULL, NULL, 'A0020', 'E0005', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0008', 'Bagong Guesthouse', 4, 1, NULL, NULL, NULL, NULL, NULL, 'A0003', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0009', 'Balangan Cottages', 4, 1, NULL, NULL, NULL, NULL, NULL, 'A0009', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0010', 'Balangan Sleep Well', 2, 1, NULL, NULL, NULL, NULL, NULL, 'A0009', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0011', 'Bale Tudor', 2, 1, NULL, NULL, NULL, NULL, NULL, 'A0004', 'E0011', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0012', 'Bali Bohemia', 5, 0, NULL, NULL, NULL, NULL, NULL, 'A0004', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0013', 'Bali Mynah', 2, 1, NULL, NULL, NULL, NULL, NULL, 'A0009', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0014', 'Bali Omah', 1, 0, NULL, NULL, NULL, NULL, NULL, 'A0001', 'E0007', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0015', 'Bali Shanti', 4, 1, NULL, NULL, NULL, NULL, NULL, 'A0003', 'E0011', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0016', 'Bamboo Villas', 2, 1, NULL, NULL, NULL, NULL, NULL, 'A0007', 'E0003', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0017', 'Bangka Suites', 4, 1, NULL, NULL, NULL, NULL, NULL, 'A0005', 'E0010', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0018', 'Barel Apartment', 4, 1, NULL, NULL, NULL, NULL, NULL, 'A0005', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0019', 'Basura', 4, 0, NULL, NULL, NULL, NULL, NULL, 'A0005', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0020', 'Batan Sabo', 4, 1, NULL, NULL, NULL, NULL, NULL, 'A0020', 'E0005', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0021', 'Batu Agung Villa', 5, 1, NULL, NULL, NULL, NULL, NULL, 'A0004', 'E0007', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0022', 'Batu Jaran Hill', 4, 1, NULL, NULL, NULL, NULL, NULL, 'A0002', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0023', 'Beverly Dago Apartment', 3, 1, NULL, NULL, NULL, NULL, NULL, 'A0006', 'E0010', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0024', 'Bingin Ombak', 4, 1, NULL, NULL, NULL, NULL, NULL, 'A0008', 'E0007', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0025', 'Bingin Surf Left', 4, 1, NULL, NULL, NULL, NULL, NULL, 'A0008', 'E0017', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0026', 'Biubiu Kumala S01', 2, 1, NULL, NULL, NULL, NULL, NULL, 'A0009', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0027', 'Blue Garden', 4, 0, NULL, NULL, NULL, NULL, NULL, 'A0001', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0028', 'Bobby\'s Place', 4, 1, NULL, NULL, NULL, NULL, NULL, 'A0002', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0029', 'Brad\'s Villa', 2, 1, NULL, NULL, NULL, NULL, NULL, 'A0011', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0030', 'Buana Homestay', 4, 1, NULL, NULL, NULL, NULL, NULL, 'A0004', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0031', 'Cabana Krui Lampung', 5, 1, NULL, NULL, NULL, NULL, NULL, 'A0005', 'E0017', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0032', 'Canggu Suite', 4, 0, NULL, NULL, NULL, NULL, NULL, 'A0003', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0033', 'Casa Bianca', 2, 0, NULL, NULL, NULL, NULL, NULL, 'A0003', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0034', 'Casa Grande Residence', 3, 1, NULL, NULL, NULL, NULL, NULL, 'A0005', 'E0010', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0035', 'Cemara Indah', 5, 0, NULL, NULL, NULL, NULL, NULL, 'A0000', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0036', 'Citra Sun Garden', 2, 0, NULL, NULL, NULL, NULL, NULL, 'A0001', 'E0003', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0037', 'Coffee Network', 4, 1, NULL, NULL, NULL, NULL, NULL, 'A0010', 'E0017', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0038', 'Come Back Guesthouse', 4, 1, NULL, NULL, NULL, NULL, NULL, 'A0003', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0039', 'D\'Java Babarsari', 1, 1, NULL, NULL, NULL, NULL, NULL, 'A0001', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0040', 'D\'Java Citra Ayu', 4, 0, NULL, NULL, NULL, NULL, NULL, 'A0001', 'E0020', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0041', 'D\'Java Gemilang', 1, 1, NULL, NULL, NULL, NULL, NULL, 'A0001', 'E0011', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0042', 'D\'Java Guest House', 4, 1, NULL, NULL, NULL, NULL, NULL, 'A0001', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0043', 'D\'Java Lempuyangan', 1, 1, NULL, NULL, NULL, NULL, NULL, 'A0001', 'E0011', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0044', 'D\'Java Monjali', 1, 1, NULL, NULL, NULL, NULL, NULL, 'A0001', 'E0011', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0045', 'D\'Java Omah Sambilegi', 4, 1, NULL, NULL, NULL, NULL, NULL, 'A0001', 'E0020', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0046', 'D\'Java Timuran', 4, 1, NULL, NULL, NULL, NULL, NULL, 'A0001', 'E0003', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0047', 'D\'Padang', 4, 1, NULL, NULL, NULL, NULL, NULL, 'A0013', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0048', 'DD Ubud Villas', 4, 0, NULL, NULL, NULL, NULL, NULL, 'A0004', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0049', 'Dago Butik Apartment', 3, 1, NULL, NULL, NULL, NULL, NULL, 'A0006', 'E0010', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0050', 'Dago Village', 2, 0, NULL, NULL, NULL, NULL, NULL, 'A0006', 'E0010', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0051', 'De Kutuh Villa', 2, 1, NULL, NULL, NULL, NULL, NULL, 'A0011', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0052', 'Denpasar Residence', 3, 1, NULL, NULL, NULL, NULL, NULL, 'A0005', 'E0010', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0053', 'Dhuna Homestay', 4, 1, NULL, NULL, NULL, NULL, NULL, 'A0003', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0054', 'Dinar Hills Villa', 4, 1, NULL, NULL, NULL, NULL, NULL, 'A0011', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0055', 'Double D Guest House', 4, 1, NULL, NULL, NULL, NULL, NULL, 'A0003', 'E0007', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0056', 'Dreamview Villa', 2, 0, NULL, NULL, NULL, NULL, NULL, 'A0008', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0057', 'Elements Social House', 4, 0, NULL, NULL, NULL, NULL, NULL, 'A0003', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0058', 'Emerald Villas', 2, 0, NULL, NULL, NULL, NULL, NULL, 'A0000', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0059', 'Family Circus', 2, 1, NULL, NULL, NULL, NULL, NULL, 'A0013', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0060', 'Full Moon Guesthouse', 4, 1, NULL, NULL, NULL, NULL, NULL, 'A0003', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0061', 'GK Gamat Garden', 4, 0, NULL, NULL, NULL, NULL, NULL, 'A0020', 'E0005', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0062', 'Gandaria Height Apartment', 4, 1, NULL, NULL, NULL, NULL, NULL, 'A0005', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0063', 'Gangga Guesthouse', 4, 1, NULL, NULL, NULL, NULL, NULL, 'A0003', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0064', 'Gatra\'s Ubud Inn', 4, 0, NULL, NULL, NULL, NULL, NULL, 'A0004', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0065', 'Gili Eco & Khumba Villas', 2, 1, NULL, NULL, NULL, NULL, NULL, 'A0014', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0066', 'Gili Teak', 4, 0, NULL, NULL, NULL, NULL, NULL, 'A0014', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0067', 'Gondang Legi Villas', 5, 1, NULL, NULL, NULL, NULL, NULL, 'A0001', 'E0003', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0068', 'Gravity Villa', 2, 0, NULL, NULL, NULL, NULL, NULL, 'A0013', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0069', 'Griya Asih', 4, 1, NULL, NULL, NULL, NULL, NULL, 'A0001', 'E0007', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0070', 'Griya Bausasran 52', 4, 1, NULL, NULL, NULL, NULL, NULL, 'A0001', 'E0020', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0071', 'Griya Langen', 2, 1, NULL, NULL, NULL, NULL, NULL, 'A0001', 'E0011', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0072', 'Griya Siwi', 1, 1, NULL, NULL, NULL, NULL, NULL, 'A0001', 'E0007', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0073', 'Griya Tiyasan', 1, 1, NULL, NULL, NULL, NULL, NULL, 'A0001', 'E0018', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0074', 'Griya Wirosaban', 4, 1, NULL, NULL, NULL, NULL, NULL, 'A0001', 'E0007', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0075', 'Hazel House', 4, 0, NULL, NULL, NULL, NULL, NULL, 'A0006', 'E0010', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0076', 'Homestay Tembi', 5, 1, NULL, NULL, NULL, NULL, NULL, 'A0001', 'E0020', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0077', 'Hyarta Residence', 2, 1, NULL, NULL, NULL, NULL, NULL, 'A0001', 'E0003', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0078', 'Indira Cottage', 4, 0, NULL, NULL, NULL, NULL, NULL, 'A0004', 'E0010', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0079', 'Jepun Sari', 4, 1, NULL, NULL, NULL, NULL, NULL, 'A0008', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0080', 'Jogja Dreams', 2, 1, NULL, NULL, NULL, NULL, NULL, 'A0001', 'E0007', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0081', 'Joglo Agung', 1, 1, NULL, NULL, NULL, NULL, NULL, 'A0001', 'E0003', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0082', 'Jubilee GuestHouse', 4, 0, NULL, NULL, NULL, NULL, NULL, 'A0003', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0083', 'Kakol Guesthouse', 4, 1, NULL, NULL, NULL, NULL, NULL, 'A0003', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0084', 'Kampung Jimba', 5, 1, NULL, NULL, NULL, NULL, NULL, 'A0013', 'E0010', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0085', 'Kembang Kuning', 4, 1, NULL, NULL, NULL, NULL, NULL, 'A0008', 'E0005', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0086', 'Kiskenda Cottages', 4, 0, NULL, NULL, NULL, NULL, NULL, 'A0004', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0087', 'Kubu Nyang Nyang', 4, 1, NULL, NULL, NULL, NULL, NULL, 'A0002', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0088', 'Kubu Pande Homestay', 4, 1, NULL, NULL, NULL, NULL, NULL, 'A0003', 'E0010', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0089', 'Kubu Tropis', 4, 0, NULL, NULL, NULL, NULL, NULL, 'A0004', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0090', 'Kukuh House', 4, 0, NULL, NULL, NULL, NULL, NULL, 'A0004', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0091', 'Kusuma Guest House', 4, 1, NULL, NULL, NULL, NULL, NULL, 'A0003', 'E0007', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0092', 'Kutuh Manak', 4, 1, NULL, NULL, NULL, NULL, NULL, 'A0013', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0093', 'La Cabane', 5, 1, NULL, NULL, NULL, NULL, NULL, 'A0009', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0094', 'La Joya 1', 5, 1, NULL, NULL, NULL, NULL, NULL, 'A0009', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0095', 'La Joya Biubiu', 5, 1, NULL, NULL, NULL, NULL, NULL, 'A0009', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0096', 'Le Yanandra', 5, 1, NULL, NULL, NULL, NULL, NULL, 'A0009', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0097', 'Lebak Guesthouse', 4, 1, NULL, NULL, NULL, NULL, NULL, 'A0003', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0098', 'Lebak Residence', 4, 1, NULL, NULL, NULL, NULL, NULL, 'A0003', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0099', 'Lemon Guesthouse', 4, 0, NULL, NULL, NULL, NULL, NULL, 'A0003', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0100', 'Like at Home', 4, 0, NULL, NULL, NULL, NULL, NULL, 'A0009', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0101', 'Little Cabin - The Landmark', 3, 1, NULL, NULL, NULL, NULL, NULL, 'A0019', 'E0003', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0102', 'Lorong Homestay', 4, 1, NULL, NULL, NULL, NULL, NULL, 'A0001', 'E0018', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0103', 'ME Villa', 2, 1, NULL, NULL, NULL, NULL, NULL, 'A0003', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0104', 'Made Roja Homestay', 4, 1, NULL, NULL, NULL, NULL, NULL, 'A0009', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0105', 'Maha Lahksmi', 4, 0, NULL, NULL, NULL, NULL, NULL, 'A0004', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0106', 'Maha Ungasan', 5, 1, NULL, NULL, NULL, NULL, NULL, 'A0011', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0107', 'Mandala House', 2, 1, NULL, NULL, NULL, NULL, NULL, 'A0003', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0108', 'Melin Inn', 3, 1, NULL, NULL, NULL, NULL, NULL, 'A0015', 'E0007', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0109', 'Moyo & Son Surf Stay', 4, 1, NULL, NULL, NULL, NULL, NULL, 'A0008', 'E0012', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0110', 'Mule Malu', 4, 1, NULL, NULL, NULL, NULL, NULL, 'A0008', 'E0011', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0111', 'My Villa', 2, 0, NULL, NULL, NULL, NULL, NULL, 'A0003', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0112', 'NDBV Lot 3', 2, 1, NULL, NULL, NULL, NULL, NULL, 'A0012', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0113', 'NDBV Lot 6', 2, 1, NULL, NULL, NULL, NULL, NULL, 'A0012', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0114', 'Ndalem Kasongan', 1, 1, NULL, NULL, NULL, NULL, NULL, 'A0001', 'E0007', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0115', 'Ndalem Natan', 4, 1, NULL, NULL, NULL, NULL, NULL, 'A0001', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0116', 'Ndalem Ngabean', 4, 1, NULL, NULL, NULL, NULL, NULL, 'A0001', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0117', 'Ndalem Panembahan', 4, 1, NULL, NULL, NULL, NULL, NULL, 'A0001', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0118', 'Ocho Bali Villa', 4, 1, NULL, NULL, NULL, NULL, NULL, 'A0011', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0119', 'Omah Gerjen 29', 4, 1, NULL, NULL, NULL, NULL, NULL, 'A0001', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0120', 'Omah JeTeHa', 1, 1, NULL, NULL, NULL, NULL, NULL, 'A0001', 'E0007', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0121', 'Omah Lila', 2, 1, NULL, NULL, NULL, NULL, NULL, 'A0001', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0122', 'Padang Padang View', 4, 1, NULL, NULL, NULL, NULL, NULL, 'A0013', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0123', 'Peacock Ubud Inn', 4, 0, NULL, NULL, NULL, NULL, NULL, 'A0004', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0124', 'Pejaten Valley', 4, 0, NULL, NULL, NULL, NULL, NULL, 'A0005', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0125', 'Pendopo 26', 4, 1, NULL, NULL, NULL, NULL, NULL, 'A0001', 'E0007', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0126', 'Pendopo Andari', 4, 1, NULL, NULL, NULL, NULL, NULL, 'A0001', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0127', 'Pondok Ijo', 2, 1, NULL, NULL, NULL, NULL, NULL, 'A0001', 'E0003', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0128', 'Pondok Joglo Odit', 4, 1, NULL, NULL, NULL, NULL, NULL, 'A0003', 'E0017', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0129', 'Pondok Lulik', 4, 1, NULL, NULL, NULL, NULL, NULL, 'A0003', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0130', 'Posnya Seni Godod', 4, 1, NULL, NULL, NULL, NULL, NULL, 'A0001', 'E0003', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0131', 'Pramestha Resort Town', 2, 1, NULL, NULL, NULL, NULL, NULL, 'A0006', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0132', 'Pramestha Resort Town - Alinda', 2, 1, NULL, NULL, NULL, NULL, NULL, 'A0006', 'E0010', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0133', 'Puri Casablanca', 3, 1, NULL, NULL, NULL, NULL, NULL, 'A0005', 'E0010', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0134', 'Puri Kelapa', 4, 1, NULL, NULL, NULL, NULL, NULL, 'A0002', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0135', 'Puri Langenarjan', 4, 1, NULL, NULL, NULL, NULL, NULL, 'A0001', 'E0003', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0136', 'Puri Minggiran', 4, 1, NULL, NULL, NULL, NULL, NULL, 'A0001', 'E0003', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0137', 'Puri Pandawa', 4, 1, NULL, NULL, NULL, NULL, NULL, 'A0011', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0138', 'Puri Sabina', 4, 1, NULL, NULL, NULL, NULL, NULL, 'A0010', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0139', 'Rajaklana', 5, 1, NULL, NULL, NULL, NULL, NULL, 'A0001', 'E0020', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0140', 'Raka & Rai Guesthouse', 4, 1, NULL, NULL, NULL, NULL, NULL, 'A0003', 'E0007', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0141', 'Rama Village', 5, 1, NULL, NULL, NULL, NULL, NULL, 'A0003', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0142', 'Riverside Cottages', 4, 1, NULL, NULL, NULL, NULL, NULL, 'A0001', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0143', 'Rock-a-Villa', 2, 0, NULL, NULL, NULL, NULL, NULL, 'A0015', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0144', 'Roemah Boedi', 5, 1, NULL, NULL, NULL, NULL, NULL, 'A0001', 'E0003', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0145', 'Roemah Canting', 4, 1, NULL, NULL, NULL, NULL, NULL, 'A0001', 'E0007', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0146', 'Royal Majestic Villa', 2, 0, NULL, NULL, NULL, NULL, NULL, 'A0010', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0147', 'Rumah Eyang', 4, 1, NULL, NULL, NULL, NULL, NULL, 'A0001', 'E0011', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0148', 'Rumah Kami', 1, 1, NULL, NULL, NULL, NULL, NULL, 'A0001', 'E0007', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0149', 'Rumah Kemang 50', 2, 1, NULL, NULL, NULL, NULL, NULL, 'A0005', 'E0010', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0150', 'Rumah Lavia', 2, 1, NULL, NULL, NULL, NULL, NULL, 'A0001', 'E0003', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0151', 'Rumah Sarengat', 1, 1, NULL, NULL, NULL, NULL, NULL, 'A0001', 'E0011', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0152', 'Rumah Teteh', 1, 1, NULL, NULL, NULL, NULL, NULL, 'A0001', 'E0003', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0153', 'Sahid Residence', 4, 1, NULL, NULL, NULL, NULL, NULL, 'A0005', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0154', 'Sahid Sudirman Residence - 27B', 3, 1, NULL, NULL, NULL, NULL, NULL, 'A0005', 'E0010', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0155', 'Sanata Yoga Guesthouse', 4, 1, NULL, NULL, NULL, NULL, NULL, 'A0003', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0156', 'Sannyas Yoga House', 4, 1, NULL, NULL, NULL, NULL, NULL, 'A0002', 'E0017', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0157', 'Santosha Ubud', 4, 0, NULL, NULL, NULL, NULL, NULL, 'A0004', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0158', 'Sartika Apartment', 4, 0, NULL, NULL, NULL, NULL, NULL, 'A0005', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0159', 'Saveria Apartment - Steve', 3, 0, NULL, NULL, NULL, NULL, NULL, 'A0005', 'E0010', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0160', 'Sawah Joglo', 5, 1, NULL, NULL, NULL, NULL, NULL, 'A0001', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0161', 'Secret Garden', 2, 0, NULL, NULL, NULL, NULL, NULL, 'A0008', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0162', 'Seno Guesthouse', 4, 1, NULL, NULL, NULL, NULL, NULL, 'A0013', 'E0017', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0163', 'Serpong Greenview Apartment', 3, 1, NULL, NULL, NULL, NULL, NULL, 'A0005', 'E0010', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0164', 'Sesapi Putih', 1, 1, NULL, NULL, NULL, NULL, NULL, 'A0011', 'E0008', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0165', 'Shankara Guesthouse', 4, 1, NULL, NULL, NULL, NULL, NULL, 'A0008', 'E0017', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0166', 'Siaga Raya 3 Villas', 2, 1, NULL, NULL, NULL, NULL, NULL, 'A0005', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0167', 'Sinar Sari Bingin', 4, 1, NULL, NULL, NULL, NULL, NULL, 'A0008', 'E0017', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0168', 'Singga Jo Villa', 2, 0, NULL, NULL, NULL, NULL, NULL, 'A0003', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0169', 'Sisin Uma Homestay', 4, 0, NULL, NULL, NULL, NULL, NULL, 'A0003', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0170', 'Sleeping Buddha', 2, 1, NULL, NULL, NULL, NULL, NULL, 'A0004', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0171', 'Srikandi Guesthouse', 4, 1, NULL, NULL, NULL, NULL, NULL, 'A0003', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0172', 'Summergrass', 4, 1, NULL, NULL, NULL, NULL, NULL, 'A0001', 'E0018', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0173', 'Summerhouse', 2, 0, NULL, NULL, NULL, NULL, NULL, 'A0017', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0174', 'Sunset Condotel Kuta', 4, 0, NULL, NULL, NULL, NULL, NULL, 'A0016', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0175', 'Suparsa Guesthouse', 4, 0, NULL, NULL, NULL, NULL, NULL, 'A0004', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0176', 'Surfloge Guesthouse', 4, 0, NULL, NULL, NULL, NULL, NULL, 'A0003', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0177', 'Taman Amertha', 4, 0, NULL, NULL, NULL, NULL, NULL, 'A0004', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0178', 'Taman Asih', 4, 1, NULL, NULL, NULL, NULL, NULL, 'A0008', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0179', 'Taman Bintang', 4, 1, NULL, NULL, NULL, NULL, NULL, 'A0004', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0180', 'Taman Melati Margonda', 4, 0, NULL, NULL, NULL, NULL, NULL, 'A0005', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0181', 'Tamu Ibu', 1, 1, NULL, NULL, NULL, NULL, NULL, 'A0001', 'E0019', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0182', 'Tegal Panggung', 4, 1, NULL, NULL, NULL, NULL, NULL, 'A0001', 'E0007', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0183', 'Teges Asri', 4, 1, NULL, NULL, NULL, NULL, NULL, 'A0008', 'E0003', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0184', 'Tembi Rumah Budaya', 4, 1, NULL, NULL, NULL, NULL, NULL, 'A0001', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0185', 'The Alchemist', 5, 1, NULL, NULL, NULL, NULL, NULL, 'A0009', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0186', 'The Beach House', 5, 0, NULL, NULL, NULL, NULL, NULL, 'A0009', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0187', 'The Gong', 4, 1, NULL, NULL, NULL, NULL, NULL, 'A0002', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0188', 'The Hideaway & Redsalt', 4, 1, NULL, NULL, NULL, NULL, NULL, 'A0003', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0189', 'Redsalt', 5, 1, NULL, NULL, NULL, NULL, NULL, 'A0003', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0190', 'The Jarrdin Apartment', 3, 1, NULL, NULL, NULL, NULL, NULL, 'A0006', 'E0010', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0191', 'The Jepun Bingin', 4, 1, NULL, NULL, NULL, NULL, NULL, 'A0008', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0192', 'The Kayuri Canggu', 4, 1, NULL, NULL, NULL, NULL, NULL, 'A0003', 'E0007', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0193', 'The Khama Villas', 2, 1, NULL, NULL, NULL, NULL, NULL, 'A0001', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0194', 'The Miracle Villas', 2, 0, NULL, NULL, NULL, NULL, NULL, 'A0012', 'E0005', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0195', 'The Pakis Hostel', 4, 1, NULL, NULL, NULL, NULL, NULL, 'A0004', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0196', 'The Paving', 4, 1, NULL, NULL, NULL, NULL, NULL, 'A0003', 'E0010', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0197', 'The Sakura', 4, 0, NULL, NULL, NULL, NULL, NULL, 'A0010', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0198', 'The Suci Sari', 2, 1, NULL, NULL, NULL, NULL, NULL, 'A0004', 'E0006', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0199', 'The White House', 2, 0, NULL, NULL, NULL, NULL, NULL, 'A0010', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0200', 'Three Monkeys', 5, 1, NULL, NULL, NULL, NULL, NULL, 'A0002', 'E0003', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0201', 'Tirtha Canggu Suites', 4, 1, NULL, NULL, NULL, NULL, NULL, 'A0003', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0202', 'Tirto Raharjo', 4, 0, NULL, NULL, NULL, NULL, NULL, 'A0001', 'E0003', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0203', 'Toras Guesthouse', 4, 1, NULL, NULL, NULL, NULL, NULL, 'A0003', 'E0004', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0204', 'Toya Villa Ubud', 4, 1, NULL, NULL, NULL, NULL, NULL, 'A0004', 'E0007', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0205', 'Treehouse Suites', 4, 0, NULL, NULL, NULL, NULL, NULL, 'A0005', 'E0010', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0206', 'Ubud Indah', 2, 0, NULL, NULL, NULL, NULL, NULL, 'A0004', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0207', 'Uluwatu Cottages', 5, 1, NULL, NULL, NULL, NULL, NULL, 'A0002', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0208', 'Uluwatu Jungle Bugalow', 4, 1, NULL, NULL, NULL, NULL, NULL, 'A0002', 'E0010', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0209', 'Uluwatu Village House', 4, 1, NULL, NULL, NULL, NULL, NULL, 'A0002', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0210', 'Umah Ucok', 4, 1, NULL, NULL, NULL, NULL, NULL, 'A0001', 'E0007', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0211', 'V Residence', 4, 0, NULL, NULL, NULL, NULL, NULL, 'A0005', 'E0010', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0212', 'VIlla Sunia', 2, 1, NULL, NULL, NULL, NULL, NULL, 'A0003', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0213', 'VOC', 4, 1, NULL, NULL, NULL, NULL, NULL, 'A0003', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0214', 'Vila Lila Loka', 4, 1, NULL, NULL, NULL, NULL, NULL, 'A0003', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0215', 'Villa 9 Nelayan', 4, 1, NULL, NULL, NULL, NULL, NULL, 'A0003', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0216', 'Villa AKL', 2, 1, NULL, NULL, NULL, NULL, NULL, 'A0003', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0217', 'Villa Ajee', 2, 1, NULL, NULL, NULL, NULL, NULL, 'A0015', 'E0003', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0218', 'Villa Akara', 2, 0, NULL, NULL, NULL, NULL, NULL, 'A0015', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0219', 'Villa Akilea', 2, 1, NULL, NULL, NULL, NULL, NULL, 'A0002', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0220', 'Villa Ambalama', 2, 1, NULL, NULL, NULL, NULL, NULL, 'A0018', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0221', 'Villa Amelle', 4, 0, NULL, NULL, NULL, NULL, NULL, 'A0003', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0222', 'Villa Anak', 2, 1, NULL, NULL, NULL, NULL, NULL, 'A0011', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0223', 'Villa Arca', 2, 0, NULL, NULL, NULL, NULL, NULL, 'A0016', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0224', 'Villa Arindra', 4, 1, NULL, NULL, NULL, NULL, NULL, 'A0010', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0225', 'Villa Asmara', 2, 1, NULL, NULL, NULL, NULL, NULL, 'A0008', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0226', 'Villa Ayunan', 2, 1, NULL, NULL, NULL, NULL, NULL, 'A0008', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0227', 'Villa Bagus', 2, 1, NULL, NULL, NULL, NULL, NULL, 'A0009', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0228', 'Villa Bali Cliff', 2, 1, NULL, NULL, NULL, NULL, NULL, 'A0011', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0229', 'Villa Bambu', 2, 0, NULL, NULL, NULL, NULL, NULL, 'A0014', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0230', 'Villa Be Home', 2, 1, NULL, NULL, NULL, NULL, NULL, 'A0011', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0231', 'Villa Bening', 2, 1, NULL, NULL, NULL, NULL, NULL, 'A0008', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0232', 'Villa Bija', 2, 1, NULL, NULL, NULL, NULL, NULL, 'A0003', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0233', 'Villa Bingin Luna', 2, 1, NULL, NULL, NULL, NULL, NULL, 'A0008', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0234', 'Villa Bukit Surf', 2, 1, NULL, NULL, NULL, NULL, NULL, 'A0013', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0235', 'Villa Bulan & Cahaya', 2, 1, NULL, NULL, NULL, NULL, NULL, 'A0008', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0236', 'Villa Casa Mia', 2, 1, NULL, NULL, NULL, NULL, NULL, 'A0001', 'E0007', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0237', 'Villa Casa Putih', 2, 0, NULL, NULL, NULL, NULL, NULL, 'A0003', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0238', 'Villa Cenik Ubud', 4, 1, NULL, NULL, NULL, NULL, NULL, 'A0004', 'E0007', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0239', 'Villa Cerita Indah', 2, 1, NULL, NULL, NULL, NULL, NULL, 'A0008', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0240', 'Villa Driftwood', 2, 0, NULL, NULL, NULL, NULL, NULL, 'A0003', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0241', 'Villa Entre Amis', 2, 0, NULL, NULL, NULL, NULL, NULL, 'A0010', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0242', 'Villa Enzo', 2, 0, NULL, NULL, NULL, NULL, NULL, 'A0003', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0243', 'Villa Ganesha', 2, 1, NULL, NULL, NULL, NULL, NULL, 'A0003', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0244', 'Villa Hali', 2, 1, NULL, NULL, NULL, NULL, NULL, 'A0011', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0245', 'Villa Hari Indah', 2, 0, NULL, NULL, NULL, NULL, NULL, 'A0008', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0246', 'Villa Idaman', 2, 1, NULL, NULL, NULL, NULL, NULL, 'A0009', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0247', 'Villa Indigo', 2, 0, NULL, NULL, NULL, NULL, NULL, 'A0008', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0248', 'Villa Istana Willy', 2, 1, NULL, NULL, NULL, NULL, NULL, 'A0011', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0249', 'Villa Kama', 2, 1, NULL, NULL, NULL, NULL, NULL, 'A0013', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0250', 'Villa Kanha', 2, 1, NULL, NULL, NULL, NULL, NULL, 'A0010', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0251', 'Villa Karang', 2, 1, NULL, NULL, NULL, NULL, NULL, 'A0003', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0252', 'Villa Khaleesi', 2, 0, NULL, NULL, NULL, NULL, NULL, 'A0015', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0253', 'Villa Kulat', 2, 1, NULL, NULL, NULL, NULL, NULL, 'A0002', 'E0017', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0254', 'Villa Kura Kura', 2, 1, NULL, NULL, NULL, NULL, NULL, 'A0008', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0255', 'Villa Loluan', 2, 1, NULL, NULL, NULL, NULL, NULL, 'A0003', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0256', 'Villa Luna', 2, 1, NULL, NULL, NULL, NULL, NULL, 'A0011', 'E0011', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0257', 'Villa Malindo', 2, 1, NULL, NULL, NULL, NULL, NULL, 'A0010', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0258', 'Villa Mandalay', 2, 0, NULL, NULL, NULL, NULL, NULL, 'A0004', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0259', 'Villa Matahari', 2, 1, NULL, NULL, NULL, NULL, NULL, 'A0011', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0260', 'Villa Megalan', 2, 1, NULL, NULL, NULL, NULL, NULL, 'A0009', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0261', 'Villa Merdu', 2, 1, NULL, NULL, NULL, NULL, NULL, 'A0004', 'E0003', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0262', 'Villa Moyo', 2, 0, NULL, NULL, NULL, NULL, NULL, 'A0003', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0263', 'Villa Mundaka', 2, 1, NULL, NULL, NULL, NULL, NULL, 'A0003', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0264', 'Villa Nazeki', 2, 1, NULL, NULL, NULL, NULL, NULL, 'A0011', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0265', 'Villa Purnama', 2, 1, NULL, NULL, NULL, NULL, NULL, 'A0008', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0266', 'Villa Rama', 2, 1, NULL, NULL, NULL, NULL, NULL, 'A0010', 'E0010', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0267', 'Villa Rizki', 2, 1, NULL, NULL, NULL, NULL, NULL, 'A0003', 'E0007', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0268', 'Villa Savasana', 2, 1, NULL, NULL, NULL, NULL, NULL, 'A0003', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0269', 'Villa Shanti', 2, 1, NULL, NULL, NULL, NULL, NULL, 'A0008', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0270', 'Villa Shiva', 2, 1, NULL, NULL, NULL, NULL, NULL, 'A0008', 'E0005', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0271', 'Villa Siaga Raya 77 Mediapura', 2, 1, NULL, NULL, NULL, NULL, NULL, 'A0005', 'E0010', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0272', 'Villa Singa', 2, 0, NULL, NULL, NULL, NULL, NULL, 'A0009', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0273', 'Villa Sonia', 2, 0, NULL, NULL, NULL, NULL, NULL, 'A0004', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0274', 'Villa Sotis', 2, 1, NULL, NULL, NULL, NULL, NULL, 'A0003', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0275', 'Villa Sunia', 2, 1, NULL, NULL, NULL, NULL, NULL, 'A0003', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0276', 'Villa The Cantri', 2, 1, NULL, NULL, NULL, NULL, NULL, 'A0011', 'E0010', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0277', 'Villa Tortoise', 2, 1, NULL, NULL, NULL, NULL, NULL, 'A0008', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0278', 'Villa Toya', 2, 1, NULL, NULL, NULL, NULL, NULL, 'A0009', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0279', 'Villa Tropicana', 2, 0, NULL, NULL, NULL, NULL, NULL, 'A0003', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0280', 'Villa Tykhe', 2, 0, NULL, NULL, NULL, NULL, NULL, 'A0015', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0281', 'Villa Vintage 1', 2, 1, NULL, NULL, NULL, NULL, NULL, 'A0003', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0282', 'Villa Zen & Papaya', 2, 1, NULL, NULL, NULL, NULL, NULL, 'A0008', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0283', 'Villas Kemang Timur 5', 2, 0, NULL, NULL, NULL, NULL, NULL, 'A0005', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0284', 'Vinnayaka Guesthouse', 4, 1, NULL, NULL, NULL, NULL, NULL, 'A0004', 'E0007', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0285', 'Vivo Villas', 2, 0, NULL, NULL, NULL, NULL, NULL, 'A0000', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0286', 'WK Gamat Garden VIlla', 4, 1, NULL, NULL, NULL, NULL, NULL, 'A0020', 'E0007', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0287', 'Wabisabi', 1, 1, NULL, NULL, NULL, NULL, NULL, 'A0001', 'E0018', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0288', 'Watusaman', 5, 1, NULL, NULL, NULL, NULL, NULL, 'A0001', 'E0020', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0289', 'Watusaman Homestay', 4, 1, NULL, NULL, NULL, NULL, NULL, 'A0001', 'E0011', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P029', 'Villa Lulu', 1, 1, NULL, NULL, NULL, NULL, NULL, 'A0003', 'E0007', '2018-07-02 17:21:58', NULL, NULL, NULL),
('P0290', 'White Coconut', 4, 0, NULL, NULL, NULL, NULL, NULL, 'A0014', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0291', 'William\'s Place', 2, 0, NULL, NULL, NULL, NULL, NULL, 'A0018', 'E0006', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0292', 'Wira Homestay', 4, 1, NULL, NULL, NULL, NULL, NULL, 'A0008', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0293', 'Wiras Village', 4, 1, NULL, NULL, NULL, NULL, NULL, 'A0003', 'E0000', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0294', 'Wisma Eyang Sosro', 4, 1, NULL, NULL, NULL, NULL, NULL, 'A0001', 'E0003', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0295', 'Yoga Searcher', 5, 1, NULL, NULL, NULL, NULL, NULL, 'A0002', 'E0003', '2018-07-02 16:35:50', NULL, NULL, NULL),
('P0296', 'PinkCoco Bali', 5, 1, NULL, NULL, NULL, NULL, NULL, 'A0021', 'E0007', '2018-07-02 16:55:48', NULL, NULL, NULL),
('P0297', 'PinkCoco Gili Trawangan', 5, 1, NULL, NULL, NULL, NULL, NULL, 'A0014', 'E0007', '2018-07-02 16:55:48', NULL, NULL, NULL),
('P0298', 'Omah Cening', 1, 1, NULL, NULL, NULL, NULL, NULL, 'A0001', 'E0007', '2018-07-02 16:56:59', NULL, NULL, NULL),
('P0299', 'Villa Lulu', 1, 1, NULL, NULL, NULL, NULL, NULL, 'A0003', 'E0007', '2018-07-02 17:24:26', NULL, NULL, NULL),
('P0300', 'PinkCoco Gili Air', 5, 1, NULL, NULL, NULL, NULL, NULL, 'A0021', 'E0007', '2018-07-03 07:37:39', NULL, NULL, NULL);
