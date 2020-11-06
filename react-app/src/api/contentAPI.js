import axios from 'axios';
import { handlingResponse, logError } from './utils';

export const getDlq = ({ topic, subscription, numMessages }) =>
  axios({
    method: 'post',
    url: '/peek-dlq',
    headers: {
      Authorization: localStorage.getItem('token')
    },
    data: {
      topic,
      subscription,
      numMessages
    }
  })
    .then(handlingResponse([200], 'Error trying to get content'))
    .catch(logError);

export const deleteDlq = (topic, subscription) =>
  axios({
    method: 'post',
    url: '/process-dlq',
    headers: {
      Authorization: localStorage.getItem('token')
    },
    data: {
      topic,
      subscription
    }
  })
    .then(handlingResponse([200], 'Error trying to get content'))
    .catch(logError);

export const deleteActive = (topic, subscription) =>
  axios({
    method: 'post',
    url: '/delete-active',
    headers: {
      Authorization: localStorage.getItem('token')
    },
    data: {
      topic,
      subscription
    }
  })
    .then(handlingResponse([200], 'Error trying to get content'))
    .catch(logError);

export const getActive = ({ namespace, topic, subscription, numMessages }) =>
  axios({
    method: 'post',
    url: '/peek-active',
    headers: {
      Authorization: localStorage.getItem('token')
    },
    data: {
      nameSpace: namespace,
      topic,
      subscription,
      numMessages
    }
  })
    .then(handlingResponse([200], 'Error trying to get content'))
    .catch(logError);

export const getToken = credentials =>
  axios({
    method: 'post',
    url: '/auth',
    headers: {},
    data: {
      clientId: credentials.payload.clientId,
      clientSecret: credentials.payload.clientSecret,
      appTenantId: credentials.payload.appTenantId,
      subscriptionId: credentials.payload.subscriptionId
    }
  })
    .then(handlingResponse([200], 'Error trying to get content'))
    .catch(logError);

export const getNamespaces = token =>
  axios({
    method: 'get',
    url: '/namespaces',
    headers: {
      Authorization: localStorage.getItem('token')
    },
    data: {}
  });

export const getTopicsData = body =>
  axios({
    method: 'post',
    url: '/namespace',
    headers: {
      Authorization: localStorage.getItem('token')
    },
    data: body
  })
    .then(handlingResponse([200], 'Error trying to get content'))
    .catch(logError);

export const getSubscriptionDetail = async body => {
    const response = await axios({
        method: 'post',
        url: '/subscription-detail',
        headers: {
            Authorization: localStorage.getItem('token')
        },
        data: body
    })
    console.log(response);
    return response;
};

export const checkToken = async () => {
  const response = await axios({
    method: 'get',
    url: '/token-health',
    headers: {
      Authorization: localStorage.getItem('token')
    }
  });
  return response.data;
};

export const republishMessage = async (topic, subscription, message) => {
  const response = await axios({
    method: 'post',
    url: '/publish-message',
    headers: {
      Authorization: localStorage.getItem('token')
    },
    data: {
      message,
      topic,
      subscription
    },
  });
  console.log('response here', response);
  return response.data;
};