<template>
    <div class="m-5 flex flex-col gap-5">
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <!-- table start -->
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead
            class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
          >
            <tr>
              <th scope="col" class="pl-6 py-3">No</th>
              <th scope="col" class="px-6 py-3">Title</th>
              <th scope="col" class="px-6 py-3">User Id</th>
              <th scope="col" class="px-6 py-3">Action</th>
            </tr>
          </thead>
          <!-- <tbody>
            <tr
              class="bg-white border-b dark:bg-gray-800 hover:bg-slate-100 dark:border-gray-700 cursor-pointer"
              v-for="(item, index) in paginatedPosts"
              :key="index"
            >
              <td class="pl-6 py-4">{{ item.id }}</td>
              <th
                scope="row"
                @click="() => $router.push(`/posts/${item.id}`)"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {{ item.title }}
              </th>
              <td class="px-6 py-4">{{ item.userId }}</td>
              <td class="px-6 py-4">
                <div class="flex flex-row justify-start gap-5">
                  <div
                    class="font-medium text-green-500 dark:text-green-400 hover:underline cursor-pointer"
                    @click="store.editAlert(item.id, index)"
                  >
                    Edit
                  </div>
                  <div
                    class="font-medium text-red-500 dark:text-red-600 hover:underline cursor-pointer"
                    @click="store.deleteAlert"
                  >
                    Delete
                  </div>
                </div>
              </td>
            </tr>
          </tbody> -->
        </table>
        <!-- table end -->
      </div>
  
      <!-- ButtonComponent pada code sebelumnya -->
      
    </div>
  </template>