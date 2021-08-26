import process from 'process/browser';
import { Buffer } from 'buffer';
import { TextEncoder, TextDecoder } from 'util';

global.Buffer = Buffer;
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;
global.process = process;

