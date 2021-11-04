const errors = {
  BAD_REQUEST: {
    status: 400,
    User: {
      clientData: {
        inexistsClientData: {
          message: '"clientData" is required',
        },
        nameAndNumberRequired: {
          message: '"clientData" must have "nomeCliente" and "numeroCliente" properties'
        },
        clientDataInvalidFields: {
          message: '"nomeCliente" and "numeroCliente" cannot be empty'
        },
        invalidId: {
          message: '"id" is not a valid ObjectId',
        },
        invalidEmail: {
          message: '"email" must be a valid email',
        },
        emailRequired: {
          message: '"email" is required',
        },
        passwordMinLength: {
          message: '"password" length must be 6 characters long',
        },
        passwordRequired: {
          message: '"password" is required',
        },
      },
    },
    Login: {
      emailRequired: {
        message: '"email" is required',
      },
      passwordRequired: {
        message: '"password" is required',
      },
      emailEmpty: {
        message: '"email" is not allowed to be empty',
      },
      passwordEmpty: {
        message: '"password" is not allowed to be empty',
      },
      userInexists: {
        message: 'Invalid fields',
      },
    },
  },
  CONFLICT: {
    status: 409,
    User: {
      emailNotUnique: {
        message: 'User already registered',
      },
    },
  },
  NOT_FOUND: {
    status: 404,
    User: {
      userNotFound: {
        message: 'User does not exist',
      },
    },
  },
  UNAUTHORIZED: {
    status: 401,
    Token: {
      tokenNotFound: {
        message: 'Token not found',
      },
      invalidToken: {
        message: 'Expired or invalid token',
      },
    },
  },
};

module.exports = errors;
