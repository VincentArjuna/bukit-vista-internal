select * from b_tokeet
full outer join b_regint on
b_tokeet.booking_check_in = b_regint.booking_check_in
and b_tokeet.booking_check_out=b_regint.booking_check_out