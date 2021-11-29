//*Flattens an object into a single level 
//?Code from https://stackoverflow.com/a/65883097/11699778 , thx to gkunz on StackOverflow
export function toFlatPropertyMap(obj: object, keySeparator = '.') {
  	const flattenRecursive = (obj: object, parentProperty?: string, propertyMap: Record<string, unknown> = {}) => {
    	for(const [key, value] of Object.entries(obj)){
      	const property = parentProperty ? `${parentProperty}${keySeparator}${key}` : key;
      	if(value && typeof value === 'object'){
				//TODO fix problem where where depending on object's depth is to high it will 
				//! return a default "." separator 
        		flattenRecursive(value, property, propertyMap);
      	} else {
        		propertyMap[property] = value;
	      }
    	}
    	return propertyMap;
  	};
  	return flattenRecursive(obj);
}



//* Creates css vars in: "--varName: value;" format and exports it as an string Array, with each string containing a var
//* or exports an Object containing key: var name, and value: value
export function makeCssThemeVars<T extends true | false = false>(
	jsTheme: Object, toArray?: T, namespace?: string
	): T extends true ? string[] : Object {
   const flattenedObject = toFlatPropertyMap(jsTheme, '-')
	const recordEntries = Object.entries(flattenedObject)

	if(toArray) return recordEntries.map(
		([key, value]) => `--${namespace ? `${namespace}-` : ''}${key}: ${value};`
	) as string[]
	return recordEntries.reduce(
      (cssTheme, [key, value]) => ({
         ...cssTheme,
         [`--${namespace ? `${namespace}-` : ``}${key}`]: value
      }), {}
   ) as any
}
