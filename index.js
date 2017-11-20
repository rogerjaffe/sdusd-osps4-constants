const CONSTANTS = {
  SYSTEM: {
    DB_PREFIX_PS: 'ps_',
    DB_PREFIX_OSPS: 'osps_',
    DB_NAME: 'osps4',
    EMAIL_LOG_TO: 'rjaffe@sandi.net',
    EMAIL_HOST: 'mail.sandi.net',
    LAST_UPDATE_FILE: 'lastUpdate.txt'
  },
  OSPS_DATA: {
    OSPS_TABLE_LIST: ['osps_course_lists'],
    CSV_REQUIREMENT_FLAGS_FILENAME: 'csv_student_data.csv',
    CSV_REQUIREMENT_FLAGS_FIELDS_FILENAME: 'csv_student_data_fields.csv',
    CSV_JSON_FILENAME: 'csv_json.csv',
    CSV_JSON_FIELDS_FILENAME: 'csv_json_fields.csv',

    REQUIREMENT_FLAGS_TABLE_NAME: 'requirement_flags',
    JSON_DATA_TABLE_NAME: 'student_data',
    OSPS_USERS_TABLE: 'users'
  },
  PS_FIELDS: {
    PS_CAHSEE: [
      'student_number',
      'math',
      'ela',
      'test_year'
    ],

    PS_COURSE_LIST: [
      'course_number',
      'course_name',
      'department',
      'credit_hours',
      'repeatable',
      'uc_category',
      'weighted'
    ],

    PS_FITNESSGRAM: [
      'student_number',
      'overall'
    ],

    PS_GPA: [
      'student_number',
      '9_12_total_wgpa',
      '10_12_total_wgpa',
      '10_12_wgpa_wo_pe_rotc'
    ],

    PS_GRADE: [
      'student_number',
      'school_name',
      'store_code',
      'course_code',
      'grade',
      'term_year',
      'credits_attempted',
      'credits_received',
      'department',
      'grade_level',
      'replaced_grade',
      'replaced_by_equivalent_course',
      'replaces_equivalent_course',
      'exclude_from_suppression',
      'sdusd',
      'weighted_grade_scale'
    ],

    PS_SCHEDULE: [
      'student_number',
      'schoolid',
      'teacher',
      'room',
      'team',
      'expression',
      'periods',
      'cycle_days',
      'course_code',
      'course_name',
      'course_department',
      'term_name',
      'year_number',
      'current_term'
    ],

    PS_SCHOOL: [
      'name',
      'abbreviation',
      'schoolid'
    ],

    PS_STUDENT: [
      'student_number',
      'state_student_number',
      'schoolid',
      'last_name',
      'first_name',
      'middle_name',
      'grade_level',
      'gender',
      'class_of',
      'dob',
      'ca_counselor',
      'fed_ethnicity',
      'el_proflevel',
      'ethnicity_list',
      'guardian_language',
      'guardian_email',
      'street',
      'city',
      'state',
      'zip',
      'transcript_notes',
      'sped',
      'non_diploma'
    ],

    PS_USER: [
      'teacher_number',
      'last_name',
      'first_name',
      'email',
      'role',
      'schoolid'
    ]
  },
  UPDATE: {
    ELA: {
      GRAD: 0x400,       // Graduation requirements
      EN1: 0x1,   // 9th grade English semester 1
      EN2: 0x2,   // 9th grade English semester 2
      EN3: 0x4,   // 10th grade English semester 1
      EN4: 0x8,   // 10th grade English semester 2
      AL1: 0x10,    // American Lit semester 1
      AL2: 0x20,    // American Lit semester 2
      AC1: 0x40,  // Other English semester 1
      AC2: 0x80,  // Other English semester 2
      AL_OR_AC1: 0x100,  // Have credit for at least 1 AmLit1 OR Other1
      AL_OR_AC2: 0x200   // Have credit for at least 2 AmLit1 OR Other2
    },
    ELE: {
      GRAD: 0x1,
      SEM1: 0x2,
      SEM2: 0x4,
    },
    HIS: {
      GRAD: 0x1,      // Graduation requirements
      WH1: 0x2,       // World History 1
      WH2: 0x4,       // World History 2
      US1: 0x8,       // US History 1
      US2: 0x10,      // US History 2
      GOV: 0x20,      // Governmant
      ECON: 0x40,     // Economics
      GOV_ECON: 0x80  // One of Gov / Econ
    },
    LOE: {
      GRAD: 0x1,
      LEVEL4: 0x2,
      LOTE: 0x4
    },
    MTH: {
      GRAD: 0x1,
      IM1A: 0x2,
      IM1B: 0x4,
      IM2A: 0x8,
      IM2B: 0x10,
      IM3A: 0x20,
      IM3B: 0x40,
      COLLEGE: 0x80
    },
    NCR: {
      GRAD: 0x1
    },
    OTH: {
      GRAD: 0x1
    },
    PED: {
      GRAD: 0x1,
      SEM1: 0x2,
      SEM2: 0x4,
      SEM3: 0x8,
      SEM4: 0x10,
      SCHEDULED: 0x20,
      FITNESSGRAM: 0x40
    },
    SCI: {
      GRAD: 0x1,
      BIO: 0x2,
      CHE: 0x4,
      PHY: 0x8,
      LIFE: 0x10,
      PHYSICAL: 0x20,
      OTHER: 0x40,
      _1REQMT: 0x80,
      _2REQMT: 0x100,
      _3REQMT: 0x200
    },
    VPA: {
      GRAD: 0x1,
      SEM1: 0x2,
      SEM2: 0x4,
    }
  }
}

CONSTANTS.PS_DATA = [
  {
    filename: 'CAHSEE.csv',
    tablename: 'cahsees',
    fields: CONSTANTS.PS_FIELDS.PS_CAHSEE
  },
  {
    filename: 'CourseList.csv',
    tablename: 'course_lists',
    fields: CONSTANTS.PS_FIELDS.PS_COURSE_LIST
  },
  {
    filename: 'FitnessGram.csv',
    tablename: 'fitnessgrams',
    fields: CONSTANTS.PS_FIELDS.PS_FITNESSGRAM
  },
  {
    filename: 'GPA.csv',
    tablename: 'gpas',
    fields: CONSTANTS.PS_FIELDS.PS_GPA
  },
  {
    filename: 'Grades.csv',
    tablename: 'grades',
    fields: CONSTANTS.PS_FIELDS.PS_GRADE
  },
  {
    filename: 'Schedules.csv',
    tablename: 'schedules',
    fields: CONSTANTS.PS_FIELDS.PS_SCHEDULE
  },
  {
    filename: 'Schools.csv',
    tablename: 'schools',
    fields: CONSTANTS.PS_FIELDS.PS_SCHOOL
  },
  {
    filename: 'Students.csv',
    tablename: 'students',
    fields: CONSTANTS.PS_FIELDS.PS_STUDENT
  },
  {
    filename: 'Users.csv',
    tablename: 'users',
    fields: CONSTANTS.PS_FIELDS.PS_USER
  }
]

module.exports = CONSTANTS