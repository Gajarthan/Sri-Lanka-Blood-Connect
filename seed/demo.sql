-- Synthetic records. NOT real hospitals, organisations, names, phone numbers or clinical needs.
INSERT OR IGNORE INTO demo_hospitals (id,name,district,province,category) VALUES
('h_jaffna','Jaffna Research Centre (Fictional)','Jaffna','Northern','Demo regional centre'),
('h_vavuniya','Vavuniya Research Centre (Fictional)','Vavuniya','Northern','Demo regional centre'),
('h_kandy','Kandy Research Centre (Fictional)','Kandy','Central','Demo regional centre'),
('h_colombo','Colombo Research Centre (Fictional)','Colombo','Western','Demo regional centre'),
('h_point-pedro','Point Pedro Research Centre (Fictional)','Jaffna','Northern','Demo regional centre');
INSERT OR IGNORE INTO demo_clubs (id,name,district,member_count) VALUES
('c_north','Northern Volunteer Research Group (Fictional)','Jaffna',44),
('c_central','Central Volunteer Research Group (Fictional)','Kandy',29),
('c_west','Western Volunteer Research Group (Fictional)','Colombo',61);
INSERT OR IGNORE INTO demo_club_hospitals (club_id,hospital_id) VALUES
('c_north','h_jaffna'),('c_north','h_point-pedro'),('c_north','h_vavuniya'),
('c_central','h_kandy'),('c_west','h_colombo');
INSERT OR IGNORE INTO demo_donors (id,display_alias,blood_group,district,province,consented,open_to_contact,preferred_language) VALUES
('d01','Volunteer 001','O+','Jaffna','Northern',1,1,'ta'),
('d02','Volunteer 002','A+','Jaffna','Northern',1,1,'ta'),
('d03','Volunteer 003','B+','Jaffna','Northern',1,0,'ta'),
('d04','Volunteer 004','AB-','Jaffna','Northern',1,1,'en'),
('d05','Volunteer 005','O-','Jaffna','Northern',1,1,'ta'),
('d06','Volunteer 006','A-','Vavuniya','Northern',1,1,'ta'),
('d07','Volunteer 007','B+','Vavuniya','Northern',1,1,'si'),
('d08','Volunteer 008','O+','Vavuniya','Northern',1,1,'ta'),
('d09','Volunteer 009','AB+','Kandy','Central',1,1,'si'),
('d10','Volunteer 010','B-','Kandy','Central',1,0,'si'),
('d11','Volunteer 011','O+','Kandy','Central',1,1,'en'),
('d12','Volunteer 012','A+','Kandy','Central',1,1,'si'),
('d13','Volunteer 013','O-','Colombo','Western',1,1,'en'),
('d14','Volunteer 014','AB+','Colombo','Western',1,1,'si'),
('d15','Volunteer 015','A+','Colombo','Western',1,1,'en'),
('d16','Volunteer 016','B+','Colombo','Western',1,0,'en'),
('d17','Volunteer 017','A+','Jaffna','Northern',1,1,'ta'),
('d18','Volunteer 018','B-','Jaffna','Northern',1,1,'en'),
('d19','Volunteer 019','AB+','Vavuniya','Northern',1,1,'ta'),
('d20','Volunteer 020','O-','Colombo','Western',1,1,'si');
INSERT OR IGNORE INTO demo_campaigns (id,title,hospital_id,campaign_date,blood_group,status,capacity) VALUES
('cmp01','Community donor interest survey','h_jaffna','2026-11-03','All groups','planned',40),
('cmp02','Volunteer coordination study','h_vavuniya','2026-11-10','All groups','recruiting',25),
('cmp03','Illustrative donor engagement campaign','h_kandy','2026-11-18','O+','planned',30),
('cmp04','Research demonstration campaign','h_colombo','2026-11-22','All groups','planned',55);
INSERT OR IGNORE INTO demo_outreach_requests (id,hospital_id,blood_group,priority,status,created_on,context_note) VALUES
('r01','h_jaffna','O-','priority','review','2026-09-22','Fictional: test approval workflow; not a real blood request.'),
('r02','h_vavuniya','A+','routine','approved','2026-09-23','Fictional: hypothetical voluntary donor outreach.'),
('r03','h_kandy','B+','routine','draft','2026-09-24','Fictional: no patient or clinician information.'),
('r04','h_colombo','AB-','priority','closed','2026-09-25','Fictional: request lifecycle demonstration.');
