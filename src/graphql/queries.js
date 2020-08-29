/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      userID
      name
      age
      gender
      education
      employmentStatus
      occupation
      maritalStatus
      numChildren
      numParents
      wealthSource
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        userID
        name
        age
        gender
        education
        employmentStatus
        occupation
        maritalStatus
        numChildren
        numParents
        wealthSource
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
