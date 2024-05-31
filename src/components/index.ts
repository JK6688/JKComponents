import { withInstall } from '@/utils/withInstall';
import Tg from './Auth/TelegramAuth';
import Google from './Auth/TelegramAuth';

export * from './Auth/GoogleAuth';
export * from './Auth/TelegramAuth';

export const TelegramAuth = withInstall(Tg);

export const GoogleAuth = withInstall(Google);
