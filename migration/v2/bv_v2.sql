-- MySQL Script generated by MySQL Workbench
-- Thu Jul  5 04:40:24 2018
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
SHOW WARNINGS;

-- -----------------------------------------------------
-- Table `area`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `area` ;

SHOW WARNINGS;
CREATE TABLE IF NOT EXISTS `area` (
  `area_id` VARCHAR(45) NOT NULL,
  `area_name` VARCHAR(45) NULL,
  `created_at` TIMESTAMP NULL,
  `updated_at` TIMESTAMP NULL,
  `deleted_at` TIMESTAMP NULL,
  `temp_column` VARCHAR(45) NULL,
  PRIMARY KEY (`area_id`))
ENGINE = InnoDB;

SHOW WARNINGS;

-- -----------------------------------------------------
-- Table `employee`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `employee` ;

SHOW WARNINGS;
CREATE TABLE IF NOT EXISTS `employee` (
  `employee_id` VARCHAR(45) NOT NULL,
  `employee_name` VARCHAR(45) NULL,
  `employee_address` VARCHAR(45) NULL,
  `employee_phone` VARCHAR(45) NULL,
  `created_at` TIMESTAMP NULL,
  `updated_at` TIMESTAMP NULL,
  `deleted_at` TIMESTAMP NULL,
  `temp_column` VARCHAR(45) NULL,
  PRIMARY KEY (`employee_id`))
ENGINE = InnoDB;

SHOW WARNINGS;

-- -----------------------------------------------------
-- Table `property`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `property` ;

SHOW WARNINGS;
CREATE TABLE IF NOT EXISTS `property` (
  `property_id` VARCHAR(45) NOT NULL,
  `property_name` VARCHAR(45) NULL,
  `property_type` INT NULL,
  `property_status` INT NULL,
  `property_package` INT NULL,
  `property_design` INT NULL,
  `property_proximity` INT NULL,
  `property_life_support` INT NULL,
  `property_service` INT NULL,
  `property_owner_group_link` VARCHAR(45) NULL,
  `area_id` VARCHAR(45) NOT NULL,
  `employee_id` VARCHAR(45) NOT NULL,
  `created_at` TIMESTAMP NULL,
  `updated_at` TIMESTAMP NULL,
  `deleted_at` TIMESTAMP NULL,
  `temp_column` VARCHAR(45) NULL,
  PRIMARY KEY (`property_id`),
  INDEX `fk_property_area1_idx` (`area_id` ASC),
  INDEX `fk_property_employee1_idx` (`employee_id` ASC),
  CONSTRAINT `fk_property_area1`
    FOREIGN KEY (`area_id`)
    REFERENCES `area` (`area_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_property_employee1`
    FOREIGN KEY (`employee_id`)
    REFERENCES `employee` (`employee_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

SHOW WARNINGS;

-- -----------------------------------------------------
-- Table `unit`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `unit` ;

SHOW WARNINGS;
CREATE TABLE IF NOT EXISTS `unit` (
  `unit_id` VARCHAR(45) NOT NULL,
  `unit_name` VARCHAR(45) NULL,
  `unit_onboard_date` DATE NULL,
  `unit_base_price` INT NULL,
  `unit_currency` INT NULL,
  `unit_capacity` INT NULL,
  `unit_swimming_pool` INT NULL,
  `unit_percentage_owner` INT NULL,
  `unit_percentage_bv` INT NULL,
  `property_id` VARCHAR(45) NOT NULL,
  `created_at` TIMESTAMP NULL,
  `updated_at` TIMESTAMP NULL,
  `deleted_at` TIMESTAMP NULL,
  `temp_column` VARCHAR(45) NULL,
  PRIMARY KEY (`unit_id`),
  INDEX `fk_unit_property1_idx` (`property_id` ASC),
  CONSTRAINT `fk_unit_property1`
    FOREIGN KEY (`property_id`)
    REFERENCES `property` (`property_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

SHOW WARNINGS;

-- -----------------------------------------------------
-- Table `profile`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `profile` ;

SHOW WARNINGS;
CREATE TABLE IF NOT EXISTS `profile` (
  `profile_id` VARCHAR(45) NOT NULL,
  `profile_name` VARCHAR(45) NULL,
  `profile_email` VARCHAR(45) NULL,
  `created_at` TIMESTAMP NULL,
  `updated_at` TIMESTAMP NULL,
  `deleted_at` TIMESTAMP NULL,
  `temp_column` VARCHAR(45) NULL,
  PRIMARY KEY (`profile_id`))
ENGINE = InnoDB;

SHOW WARNINGS;

-- -----------------------------------------------------
-- Table `listing`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `listing` ;

SHOW WARNINGS;
CREATE TABLE IF NOT EXISTS `listing` (
  `listing_id` VARCHAR(45) NOT NULL,
  `listing_name` VARCHAR(100) NULL,
  `listing_onboard_date` DATE NULL,
  `listing_status` INT NULL,
  `listing_instant_book` INT NULL,
  `listing_account_owner` VARCHAR(45) NULL,
  `listing_account_bv` VARCHAR(45) NULL,
  `listing_remark` INT NULL,
  `unit_id` VARCHAR(45) NOT NULL,
  `profile_id` VARCHAR(45) NOT NULL,
  `created_at` TIMESTAMP NULL,
  `updated_at` TIMESTAMP NULL,
  `deleted_at` TIMESTAMP NULL,
  `temp_column` VARCHAR(45) NULL,
  PRIMARY KEY (`listing_id`),
  INDEX `fk_listing_unit1_idx` (`unit_id` ASC),
  INDEX `fk_listing_profile1_idx` (`profile_id` ASC),
  CONSTRAINT `fk_listing_unit1`
    FOREIGN KEY (`unit_id`)
    REFERENCES `unit` (`unit_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_listing_profile1`
    FOREIGN KEY (`profile_id`)
    REFERENCES `profile` (`profile_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

SHOW WARNINGS;

-- -----------------------------------------------------
-- Table `workflow`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `workflow` ;

SHOW WARNINGS;
CREATE TABLE IF NOT EXISTS `workflow` (
  `w_id` VARCHAR(45) NOT NULL,
  `w_method` VARCHAR(45) NULL,
  `created_at` TIMESTAMP NULL,
  `updated_at` TIMESTAMP NULL,
  `deleted_at` TIMESTAMP NULL,
  `temp_column` VARCHAR(45) NULL,
  PRIMARY KEY (`w_id`))
ENGINE = InnoDB;

SHOW WARNINGS;

-- -----------------------------------------------------
-- Table `booking`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `booking` ;

SHOW WARNINGS;
CREATE TABLE IF NOT EXISTS `booking` (
  `booking_id` VARCHAR(45) NOT NULL,
  `booking_guest_name` VARCHAR(45) NULL,
  `booking_status` INT NULL,
  `booking_check_in` DATETIME NULL,
  `booking_check_out` DATETIME NULL,
  `booking_guest_number` INT NULL,
  `booking_guest_phone` VARCHAR(45) NULL,
  `booking_guest_eta` TIME NULL,
  `booking_comm_channel` VARCHAR(45) NULL,
  `booking_notes` VARCHAR(225) NULL,
  `booking_earned` INT NULL,
  `booking_currency` INT NULL,
  `booking_received_timestamp` TIMESTAMP NULL,
  `listing_id` VARCHAR(45) NOT NULL,
  `created_at` TIMESTAMP NULL,
  `updated_at` TIMESTAMP NULL,
  `deleted_at` TIMESTAMP NULL,
  `temp_column` VARCHAR(45) NULL,
  PRIMARY KEY (`booking_id`),
  INDEX `fk_booking_listing1_idx` (`listing_id` ASC),
  CONSTRAINT `fk_booking_listing1`
    FOREIGN KEY (`listing_id`)
    REFERENCES `listing` (`listing_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

SHOW WARNINGS;

-- -----------------------------------------------------
-- Table `role`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `role` ;

SHOW WARNINGS;
CREATE TABLE IF NOT EXISTS `role` (
  `role_id` VARCHAR(45) NOT NULL,
  `role_name` VARCHAR(45) NULL,
  `role_description` VARCHAR(225) NULL,
  `created_at` TIMESTAMP NULL,
  `updated_at` TIMESTAMP NULL,
  `deleted_at` TIMESTAMP NULL,
  `temp_column` VARCHAR(45) NULL,
  PRIMARY KEY (`role_id`))
ENGINE = InnoDB;

SHOW WARNINGS;

-- -----------------------------------------------------
-- Table `permission`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `permission` ;

SHOW WARNINGS;
CREATE TABLE IF NOT EXISTS `permission` (
  `permission_id` VARCHAR(45) NOT NULL,
  `permission_name` VARCHAR(45) NULL,
  `permission_description` VARCHAR(225) NULL,
  `created_at` TIMESTAMP NULL,
  `updated_at` TIMESTAMP NULL,
  `deleted_at` TIMESTAMP NULL,
  `temp_column` VARCHAR(45) NULL,
  PRIMARY KEY (`permission_id`))
ENGINE = InnoDB;

SHOW WARNINGS;

-- -----------------------------------------------------
-- Table `user`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `user` ;

SHOW WARNINGS;
CREATE TABLE IF NOT EXISTS `user` (
  `user_id` VARCHAR(45) NOT NULL,
  `user_email` VARCHAR(45) NULL,
  `user_password` VARCHAR(225) NULL,
  `remember_token` VARCHAR(225) NULL,
  `employee_id` VARCHAR(45) NOT NULL,
  `created_at` TIMESTAMP NULL,
  `updated_at` TIMESTAMP NULL,
  `deleted_at` TIMESTAMP NULL,
  `temp_column` VARCHAR(45) NULL,
  PRIMARY KEY (`user_id`),
  INDEX `fk_user_employee1_idx` (`employee_id` ASC),
  CONSTRAINT `fk_user_employee1`
    FOREIGN KEY (`employee_id`)
    REFERENCES `employee` (`employee_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

SHOW WARNINGS;

-- -----------------------------------------------------
-- Table `payment`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `payment` ;

SHOW WARNINGS;
CREATE TABLE IF NOT EXISTS `payment` (
  `payment_id` VARCHAR(45) NOT NULL,
  `payment_date` DATE NULL,
  `payment_paid_out` INT NULL,
  `payment_account` VARCHAR(45) NULL,
  `created_at` TIMESTAMP NULL,
  `updated_at` TIMESTAMP NULL,
  `deleted_at` TIMESTAMP NULL,
  `temp_column` VARCHAR(45) NULL,
  PRIMARY KEY (`payment_id`))
ENGINE = InnoDB;

SHOW WARNINGS;

-- -----------------------------------------------------
-- Table `booking_employee`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `booking_employee` ;

SHOW WARNINGS;
CREATE TABLE IF NOT EXISTS `booking_employee` (
  `booking_id` VARCHAR(45) NOT NULL,
  `employee_id` VARCHAR(45) NOT NULL,
  `be_role` INT NULL,
  `created_at` TIMESTAMP NULL,
  `updated_at` TIMESTAMP NULL,
  `deleted_at` TIMESTAMP NULL,
  `temp_column` VARCHAR(45) NULL,
  PRIMARY KEY (`booking_id`, `employee_id`),
  INDEX `fk_booking_has_employee_employee1_idx` (`employee_id` ASC),
  INDEX `fk_booking_has_employee_booking_idx` (`booking_id` ASC),
  CONSTRAINT `fk_booking_has_employee_booking`
    FOREIGN KEY (`booking_id`)
    REFERENCES `booking` (`booking_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_booking_has_employee_employee1`
    FOREIGN KEY (`employee_id`)
    REFERENCES `employee` (`employee_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

SHOW WARNINGS;

-- -----------------------------------------------------
-- Table `user_role`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `user_role` ;

SHOW WARNINGS;
CREATE TABLE IF NOT EXISTS `user_role` (
  `user_id` VARCHAR(45) NOT NULL,
  `role_id` VARCHAR(45) NOT NULL,
  `created_at` TIMESTAMP NULL,
  `updated_at` TIMESTAMP NULL,
  `deleted_at` TIMESTAMP NULL,
  `temp_column` VARCHAR(45) NULL,
  PRIMARY KEY (`user_id`, `role_id`),
  INDEX `fk_user_has_role_role1_idx` (`role_id` ASC),
  INDEX `fk_user_has_role_user1_idx` (`user_id` ASC),
  CONSTRAINT `fk_user_has_role_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `user` (`user_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_has_role_role1`
    FOREIGN KEY (`role_id`)
    REFERENCES `role` (`role_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

SHOW WARNINGS;

-- -----------------------------------------------------
-- Table `role_permission`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `role_permission` ;

SHOW WARNINGS;
CREATE TABLE IF NOT EXISTS `role_permission` (
  `permission_id` VARCHAR(45) NOT NULL,
  `role_id` VARCHAR(45) NOT NULL,
  `created_at` TIMESTAMP NULL,
  `updated_at` TIMESTAMP NULL,
  `deleted_at` TIMESTAMP NULL,
  `temp_column` VARCHAR(45) NULL,
  PRIMARY KEY (`permission_id`, `role_id`),
  INDEX `fk_permission_has_role_role1_idx` (`role_id` ASC),
  INDEX `fk_permission_has_role_permission1_idx` (`permission_id` ASC),
  CONSTRAINT `fk_permission_has_role_permission1`
    FOREIGN KEY (`permission_id`)
    REFERENCES `permission` (`permission_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_permission_has_role_role1`
    FOREIGN KEY (`role_id`)
    REFERENCES `role` (`role_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

SHOW WARNINGS;

-- -----------------------------------------------------
-- Table `property_workflow`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `property_workflow` ;

SHOW WARNINGS;
CREATE TABLE IF NOT EXISTS `property_workflow` (
  `property_id` VARCHAR(45) NOT NULL,
  `w_id` VARCHAR(45) NOT NULL,
  `created_at` TIMESTAMP NULL,
  `updated_at` TIMESTAMP NULL,
  `deleted_at` TIMESTAMP NULL,
  `temp_column` VARCHAR(45) NULL,
  PRIMARY KEY (`property_id`, `w_id`),
  INDEX `fk_property_has_property_workflow_property_workflow1_idx` (`w_id` ASC),
  INDEX `fk_property_has_property_workflow_property1_idx` (`property_id` ASC),
  CONSTRAINT `fk_property_has_property_workflow_property1`
    FOREIGN KEY (`property_id`)
    REFERENCES `property` (`property_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_property_has_property_workflow_property_workflow1`
    FOREIGN KEY (`w_id`)
    REFERENCES `workflow` (`w_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

SHOW WARNINGS;

-- -----------------------------------------------------
-- Table `payment_booking`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `payment_booking` ;

SHOW WARNINGS;
CREATE TABLE IF NOT EXISTS `payment_booking` (
  `payment_id` VARCHAR(45) NOT NULL,
  `booking_id` VARCHAR(45) NOT NULL,
  `pb_amount` INT NULL,
  `pb_currency` INT NULL,
  `created_at` TIMESTAMP NULL,
  `updated_at` TIMESTAMP NULL,
  `deleted_at` TIMESTAMP NULL,
  `temp_column` VARCHAR(45) NULL,
  PRIMARY KEY (`payment_id`, `booking_id`),
  INDEX `fk_payment_has_booking_booking1_idx` (`booking_id` ASC),
  INDEX `fk_payment_has_booking_payment1_idx` (`payment_id` ASC),
  CONSTRAINT `fk_payment_has_booking_payment1`
    FOREIGN KEY (`payment_id`)
    REFERENCES `payment` (`payment_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_payment_has_booking_booking1`
    FOREIGN KEY (`booking_id`)
    REFERENCES `booking` (`booking_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

SHOW WARNINGS;

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
