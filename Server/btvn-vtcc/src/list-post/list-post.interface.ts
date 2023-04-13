export interface ListPost {
  readonly name: string;
  readonly title: string;
  readonly content: string;
  readonly tags: string;
  readonly numberHeart: number;
  readonly heartColor: string;
  readonly avatar: number;
  readonly checkComment: boolean;
  readonly numberComment: number;
}
