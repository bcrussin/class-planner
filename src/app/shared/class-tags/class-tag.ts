import { TagColor } from './tag-color';

export class ClassTag {
  public name: string;
  public lightColor: string;
  public darkColor: string;

  constructor(data: { name: string; lightColor: string; darkColor: string }) {
    this.name = data.name;
    this.lightColor = data.lightColor;
    this.darkColor = data.darkColor;
  }

  public getName(): string {
    return this.name;
  }

  public getLightColor(): string {
    return this.lightColor;
  }

  public getDarkColor(): string {
    return this.darkColor;
  }
}
