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