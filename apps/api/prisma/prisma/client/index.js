
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  detectRuntime,
} = require('./runtime/library')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.8.1
 * Query Engine version: 78caf6feeaed953168c64e15a249c3e9a033ebe2
 */
Prisma.prismaVersion = {
  client: "5.8.1",
  engine: "78caf6feeaed953168c64e15a249c3e9a033ebe2"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}


  const path = require('path')

/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.EventScalarFieldEnum = {
  id: 'id',
  eventTitle: 'eventTitle',
  organizer: 'organizer',
  eventType: 'eventType',
  location: 'location',
  dateAndTime: 'dateAndTime',
  price: 'price',
  description: 'description',
  imgUrl: 'imgUrl'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  Event: 'Event'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "G:\\billa\\Purwadhika\\goticket-app\\apps\\api\\prisma\\prisma\\client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      }
    ],
    "previewFeatures": [],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null
  },
  "relativePath": "../..",
  "clientVersion": "5.8.1",
  "engineVersion": "78caf6feeaed953168c64e15a249c3e9a033ebe2",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "mysql",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": null,
        "value": "mysql://root:hamidah5@localhost:3306/goticket_database"
      }
    }
  },
  "inlineSchema": "Ly8gVGhpcyBpcyB5b3VyIFByaXNtYSBzY2hlbWEgZmlsZSwNCi8vIGxlYXJuIG1vcmUgYWJvdXQgaXQgaW4gdGhlIGRvY3M6IGh0dHBzOi8vcHJpcy5seS9kL3ByaXNtYS1zY2hlbWENCg0KZ2VuZXJhdG9yIGNsaWVudCB7DQogIHByb3ZpZGVyID0gInByaXNtYS1jbGllbnQtanMiDQogIG91dHB1dCAgID0gIi4vcHJpc21hL2NsaWVudCINCn0NCg0KZGF0YXNvdXJjZSBkYiB7DQogIHByb3ZpZGVyID0gIm15c3FsIg0KICB1cmwgICAgICA9ICJteXNxbDovL3Jvb3Q6aGFtaWRhaDVAbG9jYWxob3N0OjMzMDYvZ290aWNrZXRfZGF0YWJhc2UiDQp9DQoNCm1vZGVsIEV2ZW50IHsNCiAgaWQgICAgICAgICAgSW50ICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkNCiAgZXZlbnRUaXRsZSAgU3RyaW5nDQogIG9yZ2FuaXplciAgIFN0cmluZw0KICBldmVudFR5cGUgICBTdHJpbmcNCiAgbG9jYXRpb24gICAgU3RyaW5nDQogIGRhdGVBbmRUaW1lIERhdGVUaW1lDQogIHByaWNlICAgICAgIFN0cmluZw0KICBkZXNjcmlwdGlvbiBTdHJpbmcNCiAgaW1nVXJsICAgICAgU3RyaW5nPw0KfQ0KDQovLyBtb2RlbCBTYW1wbGUgew0KLy8gICBpZCAgICAgICAgSW50ICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkNCi8vICAgbmFtZSAgICAgIFN0cmluZw0KLy8gICBjb2RlICAgICAgU3RyaW5nICAgQHVuaXF1ZQ0KLy8gICBjcmVhdGVkQXQgRGF0ZVRpbWUgQGRlZmF1bHQobm93KCkpDQovLyAgIHVwZGF0ZWRBdCBEYXRlVGltZSBAdXBkYXRlZEF0DQoNCi8vICAgQEBtYXAoInNhbXBsZXMiKSAvLyBpZiB5b3Ugd2FudCB0byB1c2Ugc25ha2VfY2FzZSBmb3JtYXQNCi8vIH0NCg0KLy8gbW9kZWwgVXNlciB7DQovLyAgIGlkICAgICAgICAgICAgIEludCAgICAgICAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQ0KLy8gICB1c2VyX25hbWUgICAgICBTdHJpbmcgICAgICAgICAgQHVuaXF1ZQ0KLy8gICBlbWFpbCAgICAgICAgICBTdHJpbmcgICAgICAgICAgQHVuaXF1ZQ0KLy8gICBwYXNzd29yZCAgICAgICBTdHJpbmcNCi8vICAgcmVmZXJyYWxfY29kZSAgU3RyaW5nDQovLyAgIHJvbGUgICAgICAgICAgIFJvbGUNCi8vICAgY3JlYXRlZF9hdCAgICAgRGF0ZVRpbWUgICAgICAgIEBkZWZhdWx0KG5vdygpKQ0KLy8gICB1cGRhdGVkX2F0ICAgICBEYXRlVGltZSAgICAgICAgQHVwZGF0ZWRBdA0KLy8gICBldmVudHMgICAgICAgICBFdmVudFtdDQovLyAgIHJlZmVycmVyUG9pbnRzIFJlZmVycmFsUG9pbnRbXSBAcmVsYXRpb24oIlJlZmVycmVyVG9SZWZlcnJhbFBvaW50IikNCi8vICAgcmVmZXJyZWRQb2ludHMgUmVmZXJyYWxQb2ludFtdIEByZWxhdGlvbigiUmVmZXJyZWRUb1JlZmVycmFsUG9pbnQiKQ0KLy8gICBjb3Vwb25zRXZlbnQgICBDb3Vwb25zRXZlbnRbXQ0KLy8gICB0cmFuc2FjdGlvbnMgICBUcmFuc2FjdGlvbltdDQovLyAgIHJldmlld3MgICAgICAgIFJldmlld1tdDQovLyB9DQoNCi8vIG1vZGVsIEV2ZW50IHsNCi8vICAgaWQgICAgICAgICAgIEludCAgICAgICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpDQovLyAgIG9yZ2FuaXplcl9pZCBJbnQNCi8vICAgdGl0bGUgICAgICAgIFN0cmluZw0KLy8gICBwcmljZSAgICAgICAgRGVjaW1hbCAgICAgICAgQGRlZmF1bHQoMCkNCi8vICAgZGF0ZV90aW1lICAgIERhdGVUaW1lDQovLyAgIGVuZF90aW1lICAgICBEYXRlVGltZQ0KLy8gICBsb2NhdGlvbiAgICAgU3RyaW5nDQovLyAgIGRlc2NyaXB0aW9uICBTdHJpbmcNCi8vICAgc2VhdHMgICAgICAgIEludA0KLy8gICBpc19mcmVlICAgICAgQm9vbGVhbj8NCi8vICAgaXNfb25saW5lICAgIEJvb2xlYW4/DQovLyAgIGNhdGVnb3J5ICAgICBDYXRlZ29yeQ0KLy8gICBjcmVhdGVkX2F0ICAgRGF0ZVRpbWUgICAgICAgQGRlZmF1bHQobm93KCkpDQovLyAgIHVwZGF0ZWRfYXQgICBEYXRlVGltZSAgICAgICBAdXBkYXRlZEF0DQovLyAgIG9yZ2FuaXplciAgICBVc2VyICAgICAgICAgICBAcmVsYXRpb24oZmllbGRzOiBbb3JnYW5pemVyX2lkXSwgcmVmZXJlbmNlczogW2lkXSkNCi8vICAgY291cG9uc0V2ZW50IENvdXBvbnNFdmVudFtdDQovLyAgIHRyYW5zYWN0aW9ucyBUcmFuc2FjdGlvbltdDQovLyAgIHJldmlld3MgICAgICBSZXZpZXdbXQ0KLy8gfQ0KDQovLyBtb2RlbCBSZWZlcnJhbFBvaW50IHsNCi8vICAgaWQgICAgICAgICAgICAgIEludCAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpDQovLyAgIHJlZmVycmVyX2lkICAgICBJbnQNCi8vICAgcmVmZXJyZWRfaWQgICAgIEludA0KLy8gICBwb2ludHMgICAgICAgICAgSW50ICAgICAgQGRlZmF1bHQoMTAwMDApDQovLyAgIGNsYWltX3BvaW50cyAgICBCb29sZWFuDQovLyAgIGNyZWF0ZWRfYXQgICAgICBEYXRlVGltZSBAZGVmYXVsdChub3coKSkNCi8vICAgZXhwaXJhdGlvbl9kYXRlIERhdGVUaW1lIEBkZWZhdWx0KGRiZ2VuZXJhdGVkKCJDVVJSRU5UX1RJTUVTVEFNUCArIElOVEVSVkFMIDMgTU9OVEgiKSkNCi8vICAgcmVmZXJyZXIgICAgICAgIFVzZXIgICAgIEByZWxhdGlvbigiUmVmZXJyZXJUb1JlZmVycmFsUG9pbnQiLCBmaWVsZHM6IFtyZWZlcnJlcl9pZF0sIHJlZmVyZW5jZXM6IFtpZF0pDQovLyAgIHJlZmVycmVkICAgICAgICBVc2VyICAgICBAcmVsYXRpb24oIlJlZmVycmVkVG9SZWZlcnJhbFBvaW50IiwgZmllbGRzOiBbcmVmZXJyZWRfaWRdLCByZWZlcmVuY2VzOiBbaWRdKQ0KLy8gfQ0KDQovLyBtb2RlbCBDb3Vwb25zRXZlbnQgew0KLy8gICBpZCAgICAgICAgICAgICAgSW50ICAgICAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQ0KLy8gICB1c2VyX2lkICAgICAgICAgSW50DQovLyAgIGV2ZW50X2lkICAgICAgICBJbnQNCi8vICAgY291cG9uX3R5cGUgICAgIENvdXBvblR5cGUNCi8vICAgZGlzY291bnRfYW1vdW50IERlY2ltYWwNCi8vICAgaXNfdXNlZCAgICAgICAgIEJvb2xlYW4NCi8vICAgY3JlYXRlZF9hdCAgICAgIERhdGVUaW1lICAgICAgQGRlZmF1bHQobm93KCkpDQovLyAgIGV4cGlyYXRpb25fZGF0ZSBEYXRlVGltZSAgICAgIEBkZWZhdWx0KGRiZ2VuZXJhdGVkKCJDVVJSRU5UX1RJTUVTVEFNUCArIElOVEVSVkFMIDMgTU9OVEgiKSkNCi8vICAgdXNlciAgICAgICAgICAgIFVzZXIgICAgICAgICAgQHJlbGF0aW9uKGZpZWxkczogW3VzZXJfaWRdLCByZWZlcmVuY2VzOiBbaWRdKQ0KLy8gICBldmVudCAgICAgICAgICAgRXZlbnQgICAgICAgICBAcmVsYXRpb24oZmllbGRzOiBbZXZlbnRfaWRdLCByZWZlcmVuY2VzOiBbaWRdKQ0KLy8gICB0cmFuc2FjdGlvbiAgICAgVHJhbnNhY3Rpb25bXQ0KLy8gfQ0KDQovLyBtb2RlbCBUcmFuc2FjdGlvbiB7DQovLyAgIGlkICAgICAgICAgICAgICBJbnQgICAgICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpDQovLyAgIHVzZXJfaWQgICAgICAgICBJbnQNCi8vICAgZXZlbnRfaWQgICAgICAgIEludA0KLy8gICBjb3Vwb25fZXZlbnRfaWQgSW50Pw0KLy8gICBwb2ludHNfdXNlZCAgICAgSW50ICAgICAgICAgICBAZGVmYXVsdCgwKQ0KLy8gICBjcmVhdGVkX2F0ICAgICAgRGF0ZVRpbWUgICAgICBAZGVmYXVsdChub3coKSkNCi8vICAgdXNlciAgICAgICAgICAgIFVzZXIgICAgICAgICAgQHJlbGF0aW9uKGZpZWxkczogW3VzZXJfaWRdLCByZWZlcmVuY2VzOiBbaWRdKQ0KLy8gICBldmVudCAgICAgICAgICAgRXZlbnQgICAgICAgICBAcmVsYXRpb24oZmllbGRzOiBbZXZlbnRfaWRdLCByZWZlcmVuY2VzOiBbaWRdKQ0KLy8gICBjb3Vwb25FdmVudCAgICAgQ291cG9uc0V2ZW50PyBAcmVsYXRpb24oZmllbGRzOiBbY291cG9uX2V2ZW50X2lkXSwgcmVmZXJlbmNlczogW2lkXSkNCi8vIH0NCg0KLy8gbW9kZWwgUmV2aWV3IHsNCi8vICAgaWQgICAgICAgICBJbnQgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQ0KLy8gICB1c2VyX2lkICAgIEludA0KLy8gICBldmVudF9pZCAgIEludA0KLy8gICByYXRpbmcgICAgIEludA0KLy8gICBmZWVkYmFjayAgIFN0cmluZw0KLy8gICBjcmVhdGVkX2F0IERhdGVUaW1lIEBkZWZhdWx0KG5vdygpKQ0KLy8gICB1c2VyICAgICAgIFVzZXIgICAgIEByZWxhdGlvbihmaWVsZHM6IFt1c2VyX2lkXSwgcmVmZXJlbmNlczogW2lkXSkNCi8vICAgZXZlbnQgICAgICBFdmVudCAgICBAcmVsYXRpb24oZmllbGRzOiBbZXZlbnRfaWRdLCByZWZlcmVuY2VzOiBbaWRdKQ0KLy8gfQ0KDQovLyBlbnVtIFJvbGUgew0KLy8gICBwYXJ0aWNpcGFudA0KLy8gICBvcmdhbml6ZXINCi8vIH0NCg0KLy8gZW51bSBDYXRlZ29yeSB7DQovLyAgIG11c2ljDQovLyAgIHNlbWluYXINCi8vICAgZXRjDQovLyB9DQoNCi8vIGVudW0gQ291cG9uVHlwZSB7DQovLyAgIEVWRU5UDQovLyAgIFJFRkVSUkFMDQovLyB9DQo=",
  "inlineSchemaHash": "551d094ee7005868906022c195abb748b23cd010d2be98599078d54a22372a0c",
  "noEngine": false
}

const fs = require('fs')

config.dirname = __dirname
if (!fs.existsSync(path.join(__dirname, 'schema.prisma'))) {
  const alternativePaths = [
    "prisma/prisma/client",
    "prisma/client",
  ]
  
  const alternativePath = alternativePaths.find((altPath) => {
    return fs.existsSync(path.join(process.cwd(), altPath, 'schema.prisma'))
  }) ?? alternativePaths[0]

  config.dirname = path.join(process.cwd(), alternativePath)
  config.isBundled = true
}

config.runtimeDataModel = JSON.parse("{\"models\":{\"Event\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"eventTitle\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"organizer\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"eventType\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"location\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dateAndTime\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"price\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"imgUrl\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.getQueryEngineWasmModule = undefined


const { warnEnvConflicts } = require('./runtime/library')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

// file annotations for bundling tools to include these files
path.join(__dirname, "query_engine-windows.dll.node");
path.join(process.cwd(), "prisma/prisma/client/query_engine-windows.dll.node")
// file annotations for bundling tools to include these files
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "prisma/prisma/client/schema.prisma")
