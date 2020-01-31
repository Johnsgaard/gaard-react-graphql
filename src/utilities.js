export const reportAnalytics = (action, category, label) => {
  const dataLayer = window.dataLayer || [];
  const dataObject = {
    action,
    category,
    label,
    event: 'Page event',
  };
  // eslint-disable-next-line no-console
  if (process.env.NODE_ENV === 'development') { console.log('Sending Google Analytics report:', dataObject); }

  return dataLayer.push(dataObject);
};
