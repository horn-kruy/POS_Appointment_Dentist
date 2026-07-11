db.doctors.insertMany(\[  
  {  
    \_id: "D001",  
    doctorFirstName: "Sophea",  
    doctorLastName: "Chan",  
    gender: "Female",  
    dateOfBirth: new Date("1982-04-15"),  
    phoneNumber: "012-345-678",  
    email: "sophea.chan@clinic.com",  
    address: "123 Norodom Blvd, Phnom Penh",  
    position: "General Dentist",  
    dayoff: \["Wednesday", "Sunday"\],  
    status: "Active"  
  },  
  {  
    \_id: "D002",  
    doctorFirstName: "Virak",  
    doctorLastName: "Phan",  
    gender: "Male",  
    dateOfBirth: new Date("1978-09-22"),  
    phoneNumber: "011-234-567",  
    email: "virak.phan@clinic.com",  
    address: "45 Monivong Blvd, Phnom Penh",  
    position: "Orthodontist",  
    dayoff: \["Thursday", "Friday"\],  
    status: "Active"  
  },  
  {  
    \_id: "D003",  
    doctorFirstName: "Sreyleak",  
    doctorLastName: "Heng",  
    gender: "Female",  
    dateOfBirth: new Date("1990-01-30"),  
    phoneNumber: "015-678-901",  
    email: "sreyleak.heng@clinic.com",  
    address: "78 Toul Kork, Phnom Penh",  
    position: "Periodontist",  
    dayoff: \["Monday", "Sunday"\],  
    status: "Active"  
  },  
  {  
    \_id: "D004",  
    doctorFirstName: "Dara",  
    doctorLastName: "Keo",  
    gender: "Male",  
    dateOfBirth: new Date("1975-07-11"),  
    phoneNumber: "016-789-012",  
    email: "dara.keo@clinic.com",  
    address: "22 Russian Blvd, Phnom Penh",  
    position: "Oral Surgeon",  
    dayoff: \["Tuesday", "Saturday"\],  
    status: "On Leave"  
  },  
  {  
    \_id: "D005",  
    doctorFirstName: "Kunthea",  
    doctorLastName: "Meas",  
    gender: "Female",  
    dateOfBirth: new Date("1986-11-05"),  
    phoneNumber: "017-890-123",  
    email: "kunthea.meas@clinic.com",  
    address: "56 Sihanouk Blvd, Phnom Penh",  
    position: "Pediatric Dentist",  
    dayoff: \["Friday", "Saturday", "Sunday"\],  
    status: "Active"  
  }  
\]);

// \============================================================  
//  PATIENTS  
// \============================================================  
db.patients.insertMany(\[  
  {  
    \_id: "P001",  
    patientFirstName: "Borey",  
    patientLastName: "Lim",  
    gender: "Male",  
    dateOfBirth: new Date("1995-03-20"),  
    phoneNumber: "012-111-222",  
    email: "borey.lim@gmail.com",  
    address: "10 Street 271, Phnom Penh",  
    createdAt: new Date("2024-01-10")  
  },  
  {  
    \_id: "P002",  
    patientFirstName: "Channary",  
    patientLastName: "Sok",  
    gender: "Female",  
    dateOfBirth: new Date("1988-06-14"),  
    phoneNumber: "013-222-333",  
    email: "channary.sok@gmail.com",  
    address: "88 Street 310, Phnom Penh",  
    createdAt: new Date("2024-02-05")  
  },  
  {  
    \_id: "P003",  
    patientFirstName: "Makara",  
    patientLastName: "Oun",  
    gender: "Male",  
    dateOfBirth: new Date("2001-12-01"),  
    phoneNumber: "014-333-444",  
    email: "makara.oun@gmail.com",  
    address: "33 Chamkarmon, Phnom Penh",  
    createdAt: new Date("2024-03-18")  
  },  
  {  
    \_id: "P004",  
    patientFirstName: "Pisey",  
    patientLastName: "Roth",  
    gender: "Female",  
    dateOfBirth: new Date("1979-08-25"),  
    phoneNumber: "015-444-555",  
    email: "pisey.roth@gmail.com",  
    address: "67 Daun Penh, Phnom Penh",  
    createdAt: new Date("2024-04-22")  
  },  
  {  
    \_id: "P005",  
    patientFirstName: "Ratanak",  
    patientLastName: "Chea",  
    gender: "Male",  
    dateOfBirth: new Date("1965-02-17"),  
    phoneNumber: "016-555-666",  
    email: "ratanak.chea@gmail.com",  
    address: "14 Sen Sok, Phnom Penh",  
    createdAt: new Date("2024-05-30")  
  },  
  {  
    \_id: "P006",  
    patientFirstName: "Sreymom",  
    patientLastName: "Noun",  
    gender: "Female",  
    dateOfBirth: new Date("2010-09-09"),  
    phoneNumber: "017-666-777",  
    email: "sreymom.noun@gmail.com",  
    address: "5 Tuol Sangke, Phnom Penh",  
    createdAt: new Date("2024-06-01")  
  }  
\]);

// \============================================================  
//  SERVICES  
// \============================================================  
db.services.insertMany(\[  
  {  
    \_id: "SV001",  
    serviceName: "Dental Check-up",  
    description: "Routine oral examination and dental consultation.",  
    price: 20.00  
  },  
  {  
    \_id: "SV002",  
    serviceName: "Teeth Cleaning",  
    description: "Professional scaling and polishing to remove plaque and tartar.",  
    price: 35.00  
  },  
  {  
    \_id: "SV003",  
    serviceName: "Tooth Filling",  
    description: "Treatment of cavities using tooth-colored filling material.",  
    price: 50.00  
  },  
  {  
    \_id: "SV004",  
    serviceName: "Root Canal Treatment",  
    description: "Removal of infected pulp and restoration of the tooth.",  
    price: 150.00  
  },  
  {  
    \_id: "SV005",  
    serviceName: "Tooth Extraction",  
    description: "Removal of damaged or impacted teeth.",  
    price: 60.00  
  },  
  {  
    \_id: "SV006",  
    serviceName: "Orthodontic Consultation",  
    description: "Assessment and treatment planning for braces or aligners.",  
    price: 40.00  
  },  
  {  
    \_id: "SV007",  
    serviceName: "Dental X-Ray",  
    description: "Digital dental imaging for diagnosis and treatment planning.",  
    price: 30.00  
  }  
\]);

// \============================================================  
//  APPOINTMENTS  
// \============================================================  
db.appointments.insertMany(\[  
  {  
    \_id: "A001",  
    patientId: "P001",  
    doctorId: "D001",  
    appointmentDate: new Date("2025-01-15T09:00:00"),  
    serviceId: \["SV001", "SV002"\],  
    status: "Completed",  
    createdAt: new Date("2025-01-10")  
  },  
  {  
    \_id: "A002",  
    patientId: "P002",  
    doctorId: "D004",  
    appointmentDate: new Date("2025-02-20T10:30:00"),  
    serviceId: \["SV005", "SV007"\],  
    status: "Completed",  
    createdAt: new Date("2025-02-15")  
  },  
  {  
    \_id: "A003",  
    patientId: "P003",  
    doctorId: "D003",  
    appointmentDate: new Date("2025-03-05T14:00:00"),  
    serviceId: \["SV004"\],  
    status: "Completed",  
    createdAt: new Date("2025-03-01")  
  },  
  {  
    \_id: "A004",  
    patientId: "P004",  
    doctorId: "D002",  
    appointmentDate: new Date("2025-04-10T08:00:00"),  
    serviceId: \["SV006"\],  
    status: "Completed",  
    createdAt: new Date("2025-04-05")  
  },  
  {  
    \_id: "A005",  
    patientId: "P005",  
    doctorId: "D001",  
    appointmentDate: new Date("2025-05-18T11:00:00"),  
    serviceId: \["SV001", "SV003"\],  
    status: "Completed",  
    createdAt: new Date("2025-05-12")  
  },  
  {  
    \_id: "A006",  
    patientId: "P006",  
    doctorId: "D005",  
    appointmentDate: new Date("2025-06-22T09:30:00"),  
    serviceId: \["SV001"\],  
    status: "Scheduled",  
    createdAt: new Date("2025-06-18")  
  },  
  {  
    \_id: "A007",  
    patientId: "P001",  
    doctorId: "D004",  
    appointmentDate: new Date("2025-07-08T13:00:00"),  
    serviceId: \["SV005"\],  
    status: "Cancelled",  
    createdAt: new Date("2025-07-01")  
  }  
\]);

// \============================================================  
//  MEDICINES  (Dental Clinic)  
//  typeof: box | bottle  
// \============================================================  
db.medicines.insertMany(\[  
  {  
    \_id: "M001",  
    medicineName: "Amoxicillin 500mg",  
    description: "Antibiotic prescribed after tooth extraction or dental surgery to prevent infection.",  
    stock: 200,  
    typeof: "box",  
    unitPrice: 8.50,  
    expireDate: new Date("2026-12-31")  
  },  
  {  
    \_id: "M002",  
    medicineName: "Paracetamol 500mg",  
    description: "Pain reliever and fever reducer used after dental procedures.",  
    stock: 500,  
    typeof: "box",  
    unitPrice: 3.00,  
    expireDate: new Date("2027-06-30")  
  },  
  {  
    \_id: "M003",  
    medicineName: "Ibuprofen 400mg",  
    description: "Anti-inflammatory to reduce swelling and pain after dental treatment.",  
    stock: 150,  
    typeof: "box",  
    unitPrice: 5.00,  
    expireDate: new Date("2026-09-30")  
  },  
  {  
    \_id: "M004",  
    medicineName: "Metronidazole 200mg",  
    description: "Antibiotic used to treat gum infections and dental abscesses.",  
    stock: 180,  
    typeof: "box",  
    unitPrice: 6.00,  
    expireDate: new Date("2027-03-31")  
  },  
  {  
    \_id: "M005",  
    medicineName: "Lidocaine 2% Solution",  
    description: "Local anesthetic solution to numb the area before dental procedures.",  
    stock: 100,  
    typeof: "bottle",  
    unitPrice: 12.00,  
    expireDate: new Date("2026-11-30")  
  },  
  {  
    \_id: "M006",  
    medicineName: "Chlorhexidine Mouthwash 0.12%",  
    description: "Antiseptic mouth rinse to prevent infection after dental surgery.",  
    stock: 120,  
    typeof: "bottle",  
    unitPrice: 7.50,  
    expireDate: new Date("2027-06-30")  
  },  
  {  
    \_id: "M007",  
    medicineName: "Fluoride Mouth Rinse",  
    description: "Strengthens enamel and prevents tooth decay, used after cleaning.",  
    stock: 100,  
    typeof: "bottle",  
    unitPrice: 6.50,  
    expireDate: new Date("2027-09-30")  
  },  
  {  
    \_id: "M008",  
    medicineName: "Benzocaine Oral Solution 20%",  
    description: "Numbing solution applied to gums before injection to reduce discomfort.",  
    stock: 90,  
    typeof: "bottle",  
    unitPrice: 9.00,  
    expireDate: new Date("2027-01-31")  
  }  
\]);

// \============================================================  
//  PAYMENTS  (only completed payments are recorded)  
//  medicineId: array of medicines prescribed, or omitted if none  
//  breakdown: splits totalAmount into services \+ medicines  
// \============================================================  
db.payments.insertMany(\[  
  {  
    \_id: "PAY001",  
    appointmentId: "A001",  
    paymentMethod: "Cash",  
    paymentDate: new Date("2025-01-15"),  
    medicineId: \["M002"\],  
    breakdown: {  
      services: 55.00,  
      medicines: 3.00  
    },  
    totalAmount: 58.00,  
    status: "Completed"  
  },  
  {  
    \_id: "PAY002",  
    appointmentId: "A002",  
    paymentMethod: "ABA",  
    paymentDate: new Date("2025-02-20"),  
    medicineId: \["M001"\],  
    breakdown: {  
      services: 90.00,  
      medicines: 8.50  
    },  
    totalAmount: 98.50,  
    status: "Completed"  
  },  
  {  
    \_id: "PAY003",  
    appointmentId: "A003",  
    paymentMethod: "Cash",  
    paymentDate: new Date("2025-03-05"),  
    medicineId: \["M001", "M004"\],  
    breakdown: {  
      services: 150.00,  
      medicines: 14.50  
    },  
    totalAmount: 164.50,  
    status: "Completed"  
  },  
  {  
    \_id: "PAY004",  
    appointmentId: "A004",  
    paymentMethod: "ACELEDA",  
    paymentDate: new Date("2025-04-10"),  
    breakdown: {  
      services: 40.00,  
      medicines: 0.00  
    },  
    totalAmount: 40.00,  
    status: "Completed"  
  },  
  {  
    \_id: "PAY005",  
    appointmentId: "A005",  
    paymentMethod: "ABA",  
    paymentDate: new Date("2025-05-18"),  
    medicineId: \["M003"\],  
    breakdown: {  
      services: 70.00,  
      medicines: 5.00  
    },  
    totalAmount: 75.00,  
    status: "Completed"  
  }  
\]);  
