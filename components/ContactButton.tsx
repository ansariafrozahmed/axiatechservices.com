"use client";

import React, { useState } from "react";
import { Modal, Form, Input, InputNumber, Select, notification } from "antd";
import type { FormProps } from "antd";
import { send } from "@/utils/contactMail";

const { Option } = Select;

const services = [
  "Web Development",
  "Digital Marketing",
  "Graphic Designing",
  "App Development",
  "Bulk SMS Service",
];

type ContactFormValues = {
  name: string;
  email: string;
  number: number;
  service: string;
};

interface ContactButtonProps {
  text?: string;
}

const ContactButton: React.FC<ContactButtonProps> = ({ text }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm<ContactFormValues>();
  const [notificationApi, contextHolder] = notification.useNotification();

  // Modal Handlers
  const showModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
    form.resetFields();
  };

  // Notification Helper
  const notify = (message: string) => {
    notificationApi.open({ message });
  };

  // Form Submission Handlers
  const handleFinish: FormProps<ContactFormValues>["onFinish"] = async (
    values
  ) => {
    setLoading(true);
    try {
      const isMailSent = await send(values);
      if (isMailSent) {
        notify("Enquiry Sent");
        closeModal();
      } else {
        notify("Enquiry Failed");
      }
    } catch {
      notify("Enquiry Failed");
    } finally {
      setLoading(false);
    }
  };

  const handleFinishFailed: FormProps<ContactFormValues>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.error("Form Submission Failed:", errorInfo);
  };

  return (
    <>
      {contextHolder}
      {/* Trigger Button */}
      <button
        onClick={showModal}
        className="bg-primaryGreen text-white px-4 md:px-6 py-2.5 md:py-3 rounded text-xs tracking-widest uppercase font-medium hover:opacity-80 transition"
      >
        {text}
      </button>

      {/* Modal */}
      <Modal
        width={450}
        open={isModalOpen}
        onCancel={closeModal}
        footer={null}
        destroyOnClose
      >
        <div className="space-y-4 p-2">
          {/* Header */}
          <div className="space-y-1">
            <h2 className="text-primaryDark text-xl lg:text-2xl uppercase">
              Contact Us
            </h2>
            <p className="text-sm tracking-wide text-gray-700">
              Fill out the contact information and our team will get in touch
              with you soon!
            </p>
          </div>

          {/* Form */}
          <Form
            form={form}
            name="contactForm"
            size="large"
            initialValues={{ service: services[0] }}
            onFinish={handleFinish}
            onFinishFailed={handleFinishFailed}
            autoComplete="off"
          >
            {/* Name Field */}
            <Form.Item
              name="name"
              rules={[{ required: true, message: "Please input your name!" }]}
            >
              <Input placeholder="Enter your name" />
            </Form.Item>

            {/* Email Field */}
            <Form.Item
              name="email"
              rules={[{ required: true, message: "Please input your email!" }]}
            >
              <Input placeholder="Enter your email" />
            </Form.Item>

            {/* Number Field */}
            <Form.Item
              name="number"
              rules={[{ required: true, message: "Please input your number!" }]}
            >
              <InputNumber placeholder="Enter your number" className="w-full" />
            </Form.Item>

            {/* Service Field */}
            <Form.Item
              name="service"
              rules={[{ required: true, message: "Please select a service!" }]}
            >
              <Select placeholder="Select a service">
                {services.map((service) => (
                  <Option key={service} value={service}>
                    {service}
                  </Option>
                ))}
              </Select>
            </Form.Item>

            {/* Submit Button */}
            <Form.Item>
              <button
                type="submit"
                className="bg-primaryGreen text-white px-6 py-3 rounded text-xs tracking-widest uppercase font-medium hover:opacity-80 transition"
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
            </Form.Item>
          </Form>
        </div>
      </Modal>
    </>
  );
};

export default ContactButton;
