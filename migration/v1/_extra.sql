
--
-- Indexes for dumped tables
--

--
-- Indexes for table `area`
--
ALTER TABLE `area`
  ADD PRIMARY KEY (`area_id`);

--
-- Indexes for table `booking`
--
ALTER TABLE `booking`
  ADD PRIMARY KEY (`booking_id`),
  ADD KEY `fk_booking_listing1_idx` (`listing_id`),
  ADD KEY `fk_booking_profile1_idx` (`profile_id`);

--
-- Indexes for table `booking_employee`
--
ALTER TABLE `booking_employee`
  ADD PRIMARY KEY (`booking_id`,`employee_id`),
  ADD KEY `fk_booking_has_employee_employee1_idx` (`employee_id`),
  ADD KEY `fk_booking_has_employee_booking1_idx` (`booking_id`);

--
-- Indexes for table `employee`
--
ALTER TABLE `employee`
  ADD PRIMARY KEY (`employee_id`);

--
-- Indexes for table `listing`
--
ALTER TABLE `listing`
  ADD PRIMARY KEY (`listing_id`),
  ADD KEY `fk_listing_profile1_idx` (`profile_id`),
  ADD KEY `fk_listing_employee1_idx` (`employee_id`),
  ADD KEY `fk_listing_unit1_idx` (`unit_id`);

--
-- Indexes for table `profile`
--
ALTER TABLE `profile`
  ADD PRIMARY KEY (`profile_id`);

--
-- Indexes for table `property`
--
ALTER TABLE `property`
  ADD PRIMARY KEY (`property_id`),
  ADD KEY `fk_property_area1_idx` (`area_id`),
  ADD KEY `fk_property_employee1_idx` (`employee_id`);

--
-- Indexes for table `unit`
--
ALTER TABLE `unit`
  ADD PRIMARY KEY (`unit_id`),
  ADD KEY `fk_unit_property1_idx` (`property_id`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `booking`
--
ALTER TABLE `booking`
  ADD CONSTRAINT `fk_booking_listing1` FOREIGN KEY (`listing_id`) REFERENCES `listing` (`listing_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_booking_profile1` FOREIGN KEY (`profile_id`) REFERENCES `profile` (`profile_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `booking_employee`
--
ALTER TABLE `booking_employee`
  ADD CONSTRAINT `fk_booking_has_employee_booking1` FOREIGN KEY (`booking_id`) REFERENCES `booking` (`booking_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_booking_has_employee_employee1` FOREIGN KEY (`employee_id`) REFERENCES `employee` (`employee_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `listing`
--
ALTER TABLE `listing`
  ADD CONSTRAINT `fk_listing_employee1` FOREIGN KEY (`employee_id`) REFERENCES `employee` (`employee_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_listing_unit1` FOREIGN KEY (`unit_id`) REFERENCES `unit` (`unit_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `property`
--
ALTER TABLE `property`
  ADD CONSTRAINT `fk_property_area1` FOREIGN KEY (`area_id`) REFERENCES `area` (`area_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_property_employee1` FOREIGN KEY (`employee_id`) REFERENCES `employee` (`employee_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `unit`
--
ALTER TABLE `unit`
  ADD CONSTRAINT `fk_unit_property1` FOREIGN KEY (`property_id`) REFERENCES `property` (`property_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
