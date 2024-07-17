export function removeSkill<T>([...arr]: T[], skill: T) {
  const index = arr.indexOf(skill);
  index > -1 && arr.splice(index, 1);
  return arr;
}

export function closestSkill<T>(arr: T[], skill: T) {
  const index = arr.indexOf(skill);
  if (index === -1) {
    return arr[0];
  } else if (index === arr.length - 1) {
    return arr[arr.length - 2];
  } else {
    return arr[index + 1];
  }
}
