import YAML from 'yaml';

const config_yaml = require('../constants/config.yaml') as string;
const config = YAML.parse(config_yaml);

export const APP_NAME = config.APP_NAME ?? '変数が指定されていません';
export const APP_DESCRIPTION = config.APP_DESCRIPTION ?? '';
export const CREATOR = config.CREATOR ?? '@minagishl';
export const GOOGLE_VERIFICATION = config.GOOGLE_VERIFICATION ?? '';
