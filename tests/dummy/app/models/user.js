import Model, { attr } from "@ember-data/model";

export default class extends Model {
  @attr username;
  @attr email;
}
