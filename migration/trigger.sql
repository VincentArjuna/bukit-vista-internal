CREATE TRIGGER ins_booking BEFORE INSERT ON booking
FOR EACH ROW
BEGIN
  IF(NEW.booking_status is 'confirmed') then
    set NEW.booking_status=1;
  ELSEIF(NEW.booking_status is 'CONFIRMED') then
    set NEW.booking_status=1;
  END IF;
END

CREATE TRIGGER ins_booking AFTER INSERT ON booking
FOR EACH ROW
DECLARE
  adults number;
  children number;
  infants number;
  cnt number;
BEGIN
  set cnt =char_length(new.booking_guest_number)-char_length(replace(new.booking_guest_name,',',''));
  if(cnt >= 1) then
    set new.booking_guest_name=100;
END;

create function try(s varchar(50))
DECLARE
  x number;
BEGIN
  x:=LENGTH(s) - LENGTH(REPLACE(s, ',', ''));
  SELECT x;
end;
