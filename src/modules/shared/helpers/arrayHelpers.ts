export const compareByName = (a, b) => {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
};

export const filterAutocomplete = (inputValue, option) => {
  return option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1;
};

export const isArrayOfAtLeastOneObject = (array: any[]): boolean => array && Array.isArray && array.length > 0;
