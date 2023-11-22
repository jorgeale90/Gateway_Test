export const enum Messages {
    SUCCESS = 'success',
    ERROR = 'error',
    SERVER_RUNNING = 'Server is running at port',
    SERVER_ERROR = 'Internal Server Error',
    FILL_ALL_FIELDS = 'Please fill in all fields',
    PRE_ENTER_SEARCH_FIELD = 'Please pre-enter or search field',
}

export const enum MessagesGateway {
    SERIAL_ALREADY_REGISTERED = 'The Serial is already registered',
    NAME_ALREADY_REGISTERED = 'The Name is already registered',
    IP_ALREADY_REGISTERED = 'The IP is already registered',
    REGISTER = 'Registered Gateway with success',
    REGISTER_ERROR = 'Error in Gateway registration',
    DELETE = 'Gateway deleted with success',
    DELETE_ERROR = 'Error deleting Gateway',
    UPDATE = 'Gateway updated with success',
    UPDATE_ERROR = 'Error deleting Gateway',
    SEARCH_ERROR = 'Gateway search error',
    INVALID_IP = 'IP invalid',
}

export const enum MessagesPeripheral {
    UID_ALREADY_REGISTERED = 'The Uid is already registered',
    REGISTER = 'Registered Peripheral with success',
    REGISTER_ERROR = 'Error in Peripheral registration',
    DELETE = 'Peripheral deleted with success',
    DELETE_ERROR = 'Error deleting Peripheral',
    UPDATE = 'Peripheral updated with success',
    UPDATE_ERROR = 'Error deleting Peripheral',
    SEARCH_ERROR = 'Peripheral search error',
    MAX_PERIPHERALS_REACHED = 'A limit of 10 peripherals has been reached on this Gateway',
}