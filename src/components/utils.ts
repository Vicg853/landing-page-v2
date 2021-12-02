//*Flattens an object into a single level 
//?Code from https://stackoverflow.com/a/65883097/11699778 , thx to gkunz on StackOverflow
export function toFlatPropertyMap(obj: object, keySeparator = '.') {
  	const flattenRecursive = (obj: object, parentProperty?: string, propertyMap: Record<string, unknown> = {}) => {
    	for(const [key, value] of Object.entries(obj)){
      	const property = parentProperty ? `${parentProperty}${keySeparator}${key}` : key;
      	if(value && typeof value === 'object'){
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


//* Returns in radians the passed angle in degrees
export const degToRad = (degrees: number): number => degrees * (Math.PI / 180)

//* Get a number's scale in an interval on an other one
//* e.g.: getScale(5, 0, 10, 0, 100) => 50
export function scale (val: number, inMin: number, inMax: number, outMin: number, outMax: number): number {
   return (val - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}
