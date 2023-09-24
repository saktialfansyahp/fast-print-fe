<template>
  <v-container class="my-2" fluid>
    <form @submit.prevent="addProduct">
      <div class="space-y-12 mx-4">
        <div class="ms-4 border-b border-gray-900/10 pb-12">
          <h2 class="text-base font-semibold leading-7 text-gray-900">
            Add New Product
          </h2>
          <p
            class="border-b border-gray-900/10 pb-10 mt-1 text-sm leading-6 text-gray-600"
          >
            Provide the details for your new product.
          </p>

          <div class="mt-10 grid grid-cols-1 gap-4 gap-y-8 sm:grid-cols-2">
            <div class="">
              <label
                for="product-name"
                class="block text-sm font-medium leading-6 text-gray-900 capitalize"
                >Product name</label
              >
              <div class="mt-2">
                <input
                  type="text"
                  name="product_name"
                  v-model="product.nama_produk"
                  id="product-name"
                  autocomplete="given-name"
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  required
                />
              </div>
            </div>

            <!-- <div class="sm:col-span-4 sm:w-1/2">
              <label
                for="description"
                class="block text-sm font-medium leading-6 text-gray-900"
                >Description</label
              >
              <div class="mt-2">
                <textarea
                  id="description"
                  name="description"
                  v-model="product.description"
                  rows="3"
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div> -->

            <div class="">
              <label
                for="price"
                class="block text-sm font-medium leading-6 text-gray-900"
                >Price</label
              >
              <div class="mt-2">
                <input
                  type="text"
                  name="price"
                  id="price"
                  @input="format"
                  v-model="formattedPrice"
                  autocomplete="given-name"
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  required
                />
              </div>
            </div>

            <div class="">
              <Listbox as="div" v-model="selectedKategori">
                <ListboxLabel
                  class="block text-sm font-medium leading-6 text-gray-900"
                  >Category</ListboxLabel
                >
                <div class="relative mt-2">
                  <ListboxButton
                    class="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6"
                  >
                    <span class="flex items-center">
                      <!-- <img
                        :src="selected.avatar"
                        alt=""
                        class="h-5 w-5 flex-shrink-0 rounded-full"
                      /> -->
                      <span
                        v-if="!selectedKategori"
                        class="ml-3 block truncate capitalize"
                        >Choose Category</span
                      >
                      <span v-else class="ml-3 block truncate capitalize">{{
                        selectedKategori.kategori
                      }}</span>
                    </span>
                    <span
                      class="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2"
                    >
                      <ChevronUpDownIcon
                        class="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </span>
                  </ListboxButton>

                  <transition
                    leave-active-class="transition ease-in duration-100"
                    leave-from-class="opacity-100"
                    leave-to-class="opacity-0"
                  >
                    <ListboxOptions
                      class="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                    >
                      <ListboxOption
                        as="template"
                        v-for="person in subcategory"
                        :key="person.id"
                        :value="person"
                        v-slot="{ active, selectedKategori }"
                      >
                        <li
                          :class="[
                            active
                              ? 'bg-indigo-600 text-white'
                              : 'text-gray-900',
                            'relative cursor-default select-none py-2 pl-3 pr-9',
                          ]"
                        >
                          <div class="flex items-center">
                            <!-- <img
                              :src="person.avatar"
                              alt=""
                              class="h-5 w-5 flex-shrink-0 rounded-full"
                            /> -->
                            <span
                              :class="[
                                selectedKategori
                                  ? 'font-semibold'
                                  : 'font-normal',
                                'ml-3 block truncate capitalize',
                              ]"
                              >{{ person.kategori }}</span
                            >
                          </div>

                          <span
                            v-if="selectedKategori"
                            :class="[
                              active ? 'text-white' : 'text-indigo-600',
                              'absolute inset-y-0 right-0 flex items-center pr-4',
                            ]"
                          >
                            <CheckIcon class="h-5 w-5" aria-hidden="true" />
                          </span>
                        </li>
                      </ListboxOption>
                    </ListboxOptions>
                  </transition>
                </div>
              </Listbox>
            </div>

            <div class="">
              <Listbox as="div" v-model="selectedStatus">
                <ListboxLabel
                  class="block text-sm font-medium leading-6 text-gray-900"
                  >Status</ListboxLabel
                >
                <div class="relative mt-2">
                  <ListboxButton
                    class="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6"
                  >
                    <span class="flex items-center">
                      <span
                        v-if="!selectedStatus"
                        class="ml-3 block truncate capitalize"
                        >Choose Status</span
                      >
                      <span v-else class="ml-3 block truncate capitalize">{{
                        selectedStatus.nama_status
                      }}</span>
                    </span>
                    <span
                      class="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2"
                    >
                      <ChevronUpDownIcon
                        class="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </span>
                  </ListboxButton>

                  <transition
                    leave-active-class="transition ease-in duration-100"
                    leave-from-class="opacity-100"
                    leave-to-class="opacity-0"
                  >
                    <ListboxOptions
                      class="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                    >
                      <ListboxOption
                        as="template"
                        v-for="person in color"
                        :key="person.id"
                        :value="person"
                        v-slot="{ active, selectedStatus }"
                      >
                        <li
                          :class="[
                            active
                              ? 'bg-indigo-600 text-white'
                              : 'text-gray-900',
                            'relative cursor-default select-none py-2 pl-3 pr-9',
                          ]"
                        >
                          <div class="flex items-center">
                            <span
                              :class="[
                                selectedStatus
                                  ? 'font-semibold'
                                  : 'font-normal',
                                'ml-3 block truncate capitalize',
                              ]"
                              >{{ person.nama_status }}</span
                            >
                          </div>

                          <span
                            v-if="selectedStatus"
                            :class="[
                              active ? 'text-white' : 'text-indigo-600',
                              'absolute inset-y-0 right-0 flex items-center pr-4',
                            ]"
                          >
                            <CheckIcon class="h-5 w-5" aria-hidden="true" />
                          </span>
                        </li>
                      </ListboxOption>
                    </ListboxOptions>
                  </transition>
                </div>
              </Listbox>
            </div>

            <!-- <div class="col-span-full">
              <label
                for="cover-photo"
                class="block text-sm font-medium leading-6 text-gray-900"
                >Item Image</label
              >
              <div
                class="mt-2 cursor-pointer flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-8"
                @click="fileinput"
              >
                <div class="text-center">
                  <PhotoIcon
                    v-if="!image"
                    class="mx-auto h-12 w-12 text-gray-300"
                    aria-hidden="true"
                  />
                  <img
                    v-else
                    id="image-preview"
                    :src="image"
                    alt="Preview"
                    class="mx-auto w-20"
                  />
                  <div class="mt-4 flex text-sm leading-6 text-gray-600">
                    <label
                      for="file-upload"
                      class="mx-auto relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                      <span>Upload a file</span>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        class="sr-only"
                        accept="image/png, image/jpeg, image/jpg"
                        size="10485760"
                        @change="previewFiles"
                      />
                    </label>
                  </div>
                  <p class="text-xs leading-5 text-gray-600">
                    PNG, JPG, GIF up to 10MB
                  </p>
                </div>
              </div>
            </div> -->
          </div>
        </div>
      </div>

      <div class="mt-6 mb-4 me-4 flex items-center justify-end gap-x-6">
        <button
          type="button"
          @click="navigate"
          class="text-sm font-semibold leading-6 text-gray-900"
        >
          Cancel
        </button>
        <button
          type="submit"
          class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </form>
    <TransitionRoot as="template" :show="open">
      <Dialog as="div" class="relative z-10" @close="closeModals">
        <TransitionChild
          as="template"
          enter="ease-out duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="ease-in duration-200"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div
            class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          />
        </TransitionChild>

        <div class="fixed inset-0 z-10 overflow-y-auto">
          <div
            class="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0"
          >
            <TransitionChild
              as="template"
              enter="ease-out duration-300"
              enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enter-to="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-300"
              leave-from="opacity-100 translate-y-0 sm:scale-100"
              leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div class="relative w-full max-w-md max-h-full">
                <div
                  class="relative bg-white rounded-lg shadow dark:bg-gray-700"
                >
                  <button
                    type="button"
                    class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    data-modal-hide="popup-modal"
                  >
                    <svg
                      class="w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                    >
                      <path
                        stroke="currentStatus"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                    <span class="sr-only">Close modal</span>
                  </button>
                  <div class="p-6 text-center">
                    <svg
                      class="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentStatus"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                    <h3
                      class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400"
                    >
                      {{ message }}
                    </h3>
                    <button
                      data-modal-hide="popup-modal"
                      type="button"
                      @click="navigate"
                      class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                    >
                      Oke
                    </button>
                  </div>
                </div>
              </div>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
  </v-container>
</template>

<script setup>
import {
  Listbox,
  ListboxButton,
  ListboxLabel,
  ListboxOption,
  ListboxOptions,
  Dialog,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/vue/20/solid";
</script>

<script>
import axios from "axios";

export default {
  name: "addProduct",
  data() {
    return {
      open: false,
      subcategory: [],
      color: [],
      selectedKategori: "",
      selectedStatus: "",
      selectedItems: [],
      selectAll: false,
      formattedPrice: "",
      image: "",
      product: {},
      message: "",
      success: true,
    };
  },
  beforeMount() {
    this.fetchKategori();
    this.fetchStatus();
  },
  methods: {
    format() {
      const numericValue = parseFloat(
        this.formattedPrice.replace(/[^0-9]/g, "")
      );
      if (!isNaN(numericValue)) {
        this.formattedPrice = numericValue.toLocaleString("id-ID");
        this.product.harga = parseInt(numericValue);
      } else if (isNaN(numericValue)) {
        this.formattedPrice = "";
      }
    },
    fetchKategori() {
      axios
        .get("/api/kategori")
        .then((response) => {
          console.log(response);
          this.subcategory = response.data.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    fetchStatus() {
      axios
        .get("/api/status")
        .then((response) => {
          console.log(response);
          this.color = response.data.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    fetchData() {
      axios
        .get("/api/admin/subcategory")
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    addProduct() {
      this.product.status_id = this.selectedStatus.id;
      this.product.kategori_id = this.selectedKategori.id;
      axios
        .post("/api/produk", this.product)
        .then((response) => {
          console.log(response.data);
          this.message = "Product data has been successfully saved.";
          this.success = true;
          this.open = true;
        })
        .catch((error) => {
          console.log(error);
          console.log(this.product);
          this.open = true;
          this.message = "Failed to add product. Please try again.";
          this.success = false;
        });
    },
    navigate() {
      if (this.success == true) {
        this.open = false;
        this.$router.push("/product");
      } else {
        this.open = false;
      }
    },
  },
};
</script>
