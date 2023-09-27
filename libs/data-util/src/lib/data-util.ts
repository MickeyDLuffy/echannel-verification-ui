export const queryParamToString = (params: any) => {
  const paramString = Object.keys(params)
    .map((key) =>
      params[key] || params[key] === false || params[key] === 0
        ? encodeURIComponent(key) + '=' + encodeURIComponent(params[key])
        : ''
    )
    .join('&');

  return paramString?.trim() ? '?' + paramString?.trim() : '';
};
